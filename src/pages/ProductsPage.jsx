import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import { LogOut, Plus, Edit, Trash2, ArrowLeft, Save, X, Upload } from 'lucide-react';

const API_BASE = 'http://localhost:3000';

export default function ProductsPage() {
    const [aliados, setAliados] = useState([]);
    const [selectedAliado, setSelectedAliado] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: '',
        descripcion: '',
        precio: '',
        categoria: '',
        emoji: '🍽️',
        imagen_url: ''
    });

    useEffect(() => {
        fetchAliados();
    }, []);

    const fetchAliados = async () => {
        try {
            const res = await api.get('/aliados/all');
            setAliados(res.data);
        } catch (err) {
            console.error('Error fetching aliados:', err);
        } finally {
            setLoading(false);
        }
    };

    const fetchProducts = async (aliadoId) => {
        try {
            const res = await api.get(`/aliados/${aliadoId}/menu`);
            setProducts(res.data);
        } catch (err) {
            console.error('Error fetching products:', err);
        }
    };

    const selectAliado = (aliado) => {
        setSelectedAliado(aliado);
        fetchProducts(aliado.id);
    };

    const handleFormChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await api.post('/upload/image', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setForm({ ...form, imagen_url: res.data.imageUrl });
        } catch (err) {
            console.error('Error uploading image:', err);
            alert('Error subiendo imagen');
        } finally {
            setUploading(false);
        }
    };

    const saveProduct = async () => {
        try {
            if (editingProduct) {
                await api.patch(`/products/${editingProduct.id}`, form);
            } else {
                await api.post('/products', { ...form, aliado_id: selectedAliado.id });
            }
            fetchProducts(selectedAliado.id);
            resetForm();
        } catch (err) {
            console.error('Error saving product:', err);
        }
    };

    const deleteProduct = async (id) => {
        if (!confirm('¿Seguro que quieres eliminar este producto?')) return;
        try {
            await api.delete(`/products/${id}`);
            fetchProducts(selectedAliado.id);
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    const editProduct = (product) => {
        setForm({
            nombre: product.nombre,
            descripcion: product.descripcion || '',
            precio: product.precio,
            categoria: product.categoria || '',
            emoji: product.emoji || '🍽️',
            imagen_url: product.imagen_url || ''
        });
        setEditingProduct(product);
        setShowForm(true);
    };

    const resetForm = () => {
        setForm({ nombre: '', descripcion: '', precio: '', categoria: '', emoji: '🍽️', imagen_url: '' });
        setEditingProduct(null);
        setShowForm(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    const getImageUrl = (url) => {
        if (!url) return null;
        if (url.startsWith('http')) return url;
        return `${API_BASE}${url}`;
    };

    const EMOJIS = ['🍽️', '🍌', '🍚', '🦐', '🐟', '🥥', '🍗', '🍕', '🍔', '🥗', '🍹', '☕'];

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <header className="bg-slate-900 text-white p-4 shadow-md flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate('/dashboard')} className="text-slate-400 hover:text-white flex items-center gap-2">
                        <ArrowLeft size={18} /> Pedidos
                    </button>
                    <h1 className="text-2xl font-bold text-primary">Gestión de Productos</h1>
                </div>
                <button onClick={handleLogout} className="text-slate-400 hover:text-white flex items-center gap-2">
                    <LogOut size={18} /> Salir
                </button>
            </header>

            <main className="flex-1 p-6">
                {!selectedAliado ? (
                    <div>
                        <h2 className="text-xl font-bold text-slate-700 mb-4">Selecciona un restaurante</h2>
                        {loading ? (
                            <p className="text-slate-500">Cargando...</p>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {aliados.map(aliado => (
                                    <button
                                        key={aliado.id}
                                        onClick={() => selectAliado(aliado)}
                                        className="p-6 bg-white rounded-xl shadow-sm border border-slate-200 hover:border-amber-400 hover:shadow-md transition text-left"
                                    >
                                        <h3 className="font-bold text-slate-800 text-lg">{aliado.nombre}</h3>
                                        <p className="text-slate-500 text-sm">{aliado.categoria || 'Restaurante'}</p>
                                        <p className="text-slate-400 text-xs mt-2">{aliado.direccion}</p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <button onClick={() => setSelectedAliado(null)} className="text-amber-500 hover:text-amber-600 text-sm mb-2 flex items-center gap-1">
                                    <ArrowLeft size={14} /> Cambiar restaurante
                                </button>
                                <h2 className="text-xl font-bold text-slate-700">{selectedAliado.nombre}</h2>
                            </div>
                            <button onClick={() => setShowForm(true)} className="bg-amber-400 hover:bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
                                <Plus size={18} /> Agregar Producto
                            </button>
                        </div>

                        {/* Product Form Modal */}
                        {showForm && (
                            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                                <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl max-h-[90vh] overflow-y-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-slate-800">
                                            {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                                        </h3>
                                        <button onClick={resetForm} className="text-slate-400 hover:text-slate-600">
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Nombre</label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={form.nombre}
                                                onChange={handleFormChange}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                                placeholder="Patacón Relleno"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-1">Descripción</label>
                                            <textarea
                                                name="descripcion"
                                                value={form.descripcion}
                                                onChange={handleFormChange}
                                                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                                placeholder="Con queso, carne y hogao"
                                                rows={2}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-slate-600 mb-1">Precio</label>
                                                <input
                                                    type="number"
                                                    name="precio"
                                                    value={form.precio}
                                                    onChange={handleFormChange}
                                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                                    placeholder="15000"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-slate-600 mb-1">Categoría</label>
                                                <input
                                                    type="text"
                                                    name="categoria"
                                                    value={form.categoria}
                                                    onChange={handleFormChange}
                                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                                    placeholder="Platos"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">Imagen del producto</label>
                                            <div className="flex items-center gap-4">
                                                {form.imagen_url ? (
                                                    <div className="relative">
                                                        <img src={getImageUrl(form.imagen_url)} alt="Preview" className="w-20 h-20 object-cover rounded-lg border" />
                                                        <button
                                                            type="button"
                                                            onClick={() => setForm({ ...form, imagen_url: '' })}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center"
                                                        >✕</button>
                                                    </div>
                                                ) : (
                                                    <label className="flex items-center justify-center w-20 h-20 bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-amber-400 transition">
                                                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                                                        {uploading ? <span className="text-slate-500 text-xs">Subiendo...</span> : <Upload size={24} className="text-slate-400" />}
                                                    </label>
                                                )}
                                                <span className="text-sm text-slate-500">{form.imagen_url ? 'Imagen cargada' : 'Sube una imagen (max 5MB)'}</span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-slate-600 mb-2">Emoji (si no hay imagen)</label>
                                            <div className="flex flex-wrap gap-2">
                                                {EMOJIS.map(emoji => (
                                                    <button
                                                        key={emoji}
                                                        type="button"
                                                        onClick={() => setForm({ ...form, emoji })}
                                                        className={`text-2xl p-2 rounded-lg border ${form.emoji === emoji ? 'border-amber-400 bg-amber-50' : 'border-slate-200'}`}
                                                    >{emoji}</button>
                                                ))}
                                            </div>
                                        </div>

                                        <button
                                            onClick={saveProduct}
                                            className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                                        ><Save size={18} /> Guardar</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Products List */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                            <table className="w-full">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Producto</th>
                                        <th className="text-left p-4 text-sm font-semibold text-slate-600">Categoría</th>
                                        <th className="text-right p-4 text-sm font-semibold text-slate-600">Precio</th>
                                        <th className="text-right p-4 text-sm font-semibold text-slate-600">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    {product.imagen_url ? (
                                                        <img src={getImageUrl(product.imagen_url)} alt={product.nombre} className="w-12 h-12 object-cover rounded-lg" />
                                                    ) : (
                                                        <span className="text-2xl">{product.emoji || '🍽️'}</span>
                                                    )}
                                                    <div>
                                                        <p className="font-semibold text-slate-800">{product.nombre}</p>
                                                        <p className="text-sm text-slate-500">{product.descripcion}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-slate-600">{product.categoria || '-'}</td>
                                            <td className="p-4 text-right font-semibold text-slate-800">${parseFloat(product.precio).toLocaleString()}</td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => editProduct(product)} className="text-blue-500 hover:text-blue-600 p-2"><Edit size={16} /></button>
                                                <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:text-red-600 p-2"><Trash2 size={16} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {products.length === 0 && (
                                        <tr>
                                            <td colSpan={4} className="p-8 text-center text-slate-500">No hay productos. ¡Agrega el primero!</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
