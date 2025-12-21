import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import api from '../services/api';
import OrderCard from '../components/OrderCard';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COLUMNS = {
    pendiente: 'Pendientes',
    cocinando: 'En Cocina',
    en_camino: 'En Camino',
    entregado: 'Entregados'
};

export default function Dashboard() {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 1. Fetch initial orders
        const fetchOrders = async () => {
            try {
                const res = await api.get('/orders');
                setOrders(res.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            }
        };
        fetchOrders();

        // 2. Setup Socket
        const socket = io('http://localhost:3000');

        socket.on('connect', () => {
            console.log('Connected to socket');
            socket.emit('join_admin_orders');
        });

        socket.on('status_update', (updatedOrder) => {
            setOrders(prev => {
                return prev.map(o => o.id == updatedOrder.id ? { ...o, estado: updatedOrder.estado } : o);
            });
        });

        socket.on('new_order', (newOrder) => {
            setOrders(prev => [newOrder, ...prev]);
        });

        return () => socket.disconnect();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
                <div className="flex items-center gap-6">
                    <h1 className="text-2xl font-bold text-primary">UrabáGo Admin</h1>
                    <nav className="flex gap-4">
                        <button className="text-white font-semibold">Pedidos</button>
                        <button
                            onClick={() => navigate('/products')}
                            className="text-slate-400 hover:text-white"
                        >
                            Productos
                        </button>
                    </nav>
                </div>
                <button onClick={handleLogout} className="text-slate-400 hover:text-white flex items-center gap-2">
                    <LogOut size={18} /> Salir
                </button>
            </header>

            <main className="flex-1 p-6 overflow-x-auto">
                <div className="flex gap-6 min-w-[1000px]">
                    {Object.entries(COLUMNS).map(([status, label]) => (
                        <div key={status} className="flex-1 min-w-[250px] bg-slate-100/50 p-4 rounded-xl border border-dashed border-slate-300">
                            <h2 className="font-bold text-slate-700 mb-4 uppercase text-sm tracking-wider flex justify-between">
                                {label}
                                <span className="bg-slate-200 text-slate-600 px-2 rounded-full text-xs py-0.5">
                                    {orders.filter(o => o.estado === status).length}
                                </span>
                            </h2>
                            <div className="space-y-4">
                                {orders.filter(o => o.estado === status).map(order => (
                                    <OrderCard key={order.id} order={order} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
