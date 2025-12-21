import React, { useState } from 'react';
import { Package, MapPin, Clock } from 'lucide-react';
import api from '../services/api';

export default function OrderCard({ order }) {
    const [loading, setLoading] = useState(false);

    const updateStatus = async (newStatus) => {
        setLoading(true);
        try {
            await api.patch(`/orders/${order.id}/status`, { estado: newStatus });
            // Note: No need to update state manually, the Socket will handle it!
        } catch (err) {
            alert('Error updating status');
        } finally {
            setLoading(false);
        }
    };

    const getNextAction = () => {
        switch (order.estado) {
            case 'pendiente':
                return { label: 'Cocinar', action: 'cocinando', color: 'bg-primary text-slate-900' };
            case 'cocinando':
                return { label: 'Enviar', action: 'en_camino', color: 'bg-orange-500 text-white' };
            case 'en_camino':
                return { label: 'Entregar', action: 'entregado', color: 'bg-green-500 text-white' };
            default:
                return null;
        }
    };

    const nextParams = getNextAction();

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mb-4 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Package size={18} className="text-primary" />
                    Pedido #{order.id}
                </h3>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock size={12} />
                    {new Date(order.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>

            <div className="space-y-1 mb-4">
                {order.items?.map((item, idx) => (
                    <div key={idx} className="text-sm text-slate-600 flex justify-between">
                        <span>{item.cantidad}x {item.producto}</span>
                        <span className="font-semibold">${parseInt(item.precio).toLocaleString()}</span>
                    </div>
                ))}
                <div className="border-t pt-2 mt-2 flex justify-between text-slate-900 font-bold">
                    <span>Total:</span>
                    <span>${parseInt(order.total).toLocaleString()}</span>
                </div>
            </div>

            <div className="text-xs text-slate-500 mb-4 flex items-start gap-1">
                <MapPin size={14} className="mt-0.5 text-slate-400" />
                {order.direccion || 'Sin dirección'}
            </div>

            {nextParams && (
                <button
                    onClick={() => updateStatus(nextParams.action)}
                    disabled={loading}
                    className={`w-full py-2 rounded font-bold text-sm transition-opacity ${nextParams.color} ${loading ? 'opacity-50' : 'hover:opacity-90'}`}
                >
                    {loading ? '...' : nextParams.label}
                </button>
            )}
        </div>
    );
}
