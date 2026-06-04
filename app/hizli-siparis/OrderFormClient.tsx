'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast'; // Şık bildirim paketi eklendi

interface Product {
    _id: string;
    title: string;
    category: string;
    packaging: string;
    description: string;
    price: string;
    imageUrl: string;
}

interface OrderFormClientProps {
    products: Product[];
}

export default function OrderFormClient({ products }: OrderFormClientProps) {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const [customerName, setCustomerName] = useState('');
    const [pickupDateTime, setPickupDateTime] = useState('');
    const [minDateStr, setMinDateStr] = useState('');
    const [maxDateStr, setMaxDateStr] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        const savedName = localStorage.getItem('tatlikuyu_customer_name');
        if (savedName) {
            setCustomerName(savedName);
        }

        const now = new Date();

        const toLocalISOString = (date: Date) => {
            const tzOffset = date.getTimezoneOffset() * 60000;
            const localISOTime = (new Date(date.getTime() - tzOffset)).toISOString().slice(0, 16);
            return localISOTime;
        };

        const minStr = toLocalISOString(now);
        setMinDateStr(minStr);
        setPickupDateTime(minStr);

        const maxDate = new Date(now);
        maxDate.setDate(now.getDate() + 1);
        maxDate.setHours(23, 59, 0, 0);
        const maxStr = toLocalISOString(maxDate);
        setMaxDateStr(maxStr);

    }, []);

    const handleIncrement = (id: string) => {
        setQuantities(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const handleDecrement = (id: string) => {
        if (quantities[id] && quantities[id] > 0) {
            setQuantities(prev => ({ ...prev, [id]: prev[id] - 1 }));
        }
    };

    const handleSendOrder = (e: React.FormEvent) => {
        e.preventDefault();

        // Kontrol tamamen Toast'ta!
        if (!customerName.trim()) {
            toast.error("Lütfen adınızı veya işletme adınızı girin.");
            return;
        }

        const selectedDate = new Date(pickupDateTime);
        const now = new Date();
        const maxAllowedDate = new Date(now);
        maxAllowedDate.setDate(now.getDate() + 1);
        maxAllowedDate.setHours(23, 59, 59, 999);

        if (selectedDate < now) {
            toast.error("Geçmiş bir zamana sipariş oluşturamazsınız.");
            return;
        }

        if (selectedDate > maxAllowedDate) {
            toast.error("Siparişler en fazla 1 gün sonrasına (Yarına) oluşturulabilir.");
            return;
        }

        const selectedItems = products.filter(p => quantities[p._id] && quantities[p._id] > 0);

        if (selectedItems.length === 0) {
            toast.error("Lütfen en az bir üründen sipariş adedi seçiniz.");
            return;
        }

        localStorage.setItem('tatlikuyu_customer_name', customerName);

        const formattedDate = new Date(pickupDateTime).toLocaleString('tr-TR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        let message = `🏪 *TATLIKUYU DOĞAL - GEL-AL SİPARİŞİ*\n\n`;
        message += `👤 *Müşteri:* ${customerName}\n`;
        message += `⏰ *Geliş Zamanı:* ${formattedDate}\n`;
        if (note.trim()) {
            message += `📝 *Müşteri Notu:* ${note}\n`;
        }
        message += `\n🛒 *HAZIRLANACAK ÜRÜNLER:*\n`;

        selectedItems.forEach(item => {
            const qty = quantities[item._id];
            message += `• ${qty} Adet/Koli - ${item.title} (${item.packaging})\n`;
        });

        message += `\n💰 _Ödeme dükkanda teslimat esnasında (Nakit/Kart) yapılacaktır._\n`;
        message += `⏱️ _Bu sipariş web sitesi hızlı formu ile dükkanda hazır edilmek üzere gönderilmiştir._`;

        // Başarılı toast mesajı
        toast.success("Sipariş hazırlanıyor, WhatsApp'a yönlendiriliyorsunuz...", { icon: '🚀' });

        const whatsappNumber = "905349122051";
        const finalUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Toast'u görebilmesi için 1 saniye bekleyip WhatsApp'a atıyoruz
        setTimeout(() => {
            window.open(finalUrl, '_blank');
        }, 1000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-24 md:pb-0">

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => {
                    const currentQty = quantities[product._id] || 0;
                    const isSelected = currentQty > 0;

                    return (
                        <div
                            key={product._id}
                            className={`rounded-[2rem_8px_2rem_8px] p-4 border transition-all duration-300 flex flex-col justify-between group ${isSelected
                                    ? 'bg-emerald-50/60 border-emerald-300 shadow-md ring-1 ring-emerald-300/30'
                                    : 'bg-white border-stone-100 hover:border-cyan-100 hover:shadow-lg'
                                }`}
                        >
                            <div>
                                <div className="relative h-40 w-full rounded-[1.5rem_4px_1.5rem_4px] overflow-hidden bg-stone-50 mb-3">
                                    {product.imageUrl && (
                                        <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                                    )}
                                    {isSelected && (
                                        <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-[6px_2px_6px_2px] shadow-sm animate-pulse">
                                            SEPETTE ✔
                                        </div>
                                    )}
                                </div>
                                <span className="text-[10px] text-lime-600 font-black block uppercase tracking-wider">{product.packaging}</span>
                                <h3 className="font-extrabold text-stone-900 text-sm mt-0.5 group-hover:text-cyan-700 transition line-clamp-1">{product.title}</h3>
                                <p className="text-stone-400 text-[11px] mt-1 line-clamp-2 leading-relaxed">{product.description}</p>
                            </div>

                            <div className="mt-4 pt-3 border-t border-stone-100/60 flex items-center justify-between gap-2">
                                <span className="text-xs font-black text-stone-600 bg-stone-50 px-2 py-1 rounded-[4px_2px_4px_2px]">
                                    {product.price}
                                </span>

                                <div className="flex items-center bg-stone-100 p-1 rounded-[10px_3px_10px_3px] border border-stone-200/40">
                                    <button
                                        type="button"
                                        onClick={() => handleDecrement(product._id)}
                                        className="w-8 h-8 rounded-[6px_2px_6px_2px] bg-white hover:bg-stone-200 text-stone-800 font-bold text-sm transition"
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center text-xs font-black text-stone-800">
                                        {currentQty}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => handleIncrement(product._id)}
                                        className="w-8 h-8 rounded-[6px_2px_6px_2px] bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm transition"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>

            <div className="lg:col-span-4 bg-gradient-to-br from-cyan-900 to-cyan-950 text-white p-6 md:p-8 rounded-[2.5rem_8px_2.5rem_8px] shadow-xl space-y-6 sticky top-24 border-b-8 border-cyan-950">
                <div>
                    <h2 className="text-xl font-black tracking-tight">Gel-Al Bilgileri</h2>
                    <p className="text-cyan-200/60 text-xs mt-1">Siz dükkana ulaştığınızda siparişinizin hazır olması için bilgileri doldurun.</p>
                </div>

                {/* Formu Native Validation'dan çıkardık */}
                <form onSubmit={handleSendOrder} noValidate className="space-y-4">
                    <div>
                        <label className="text-[10px] uppercase font-black tracking-widest text-cyan-300 block mb-1.5">Adınız / İşletme Adı</label>
                        <input
                            type="text"
                            placeholder="İsim Soyisim giriniz"
                            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-[12px_4px_12px_4px] focus:outline-none focus:border-lime-400 text-white placeholder:text-white/40 text-xs font-medium"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="text-[10px] uppercase font-black tracking-widest text-cyan-300 block mb-1.5">Geliş Tarihi ve Saati</label>
                        <input
                            type="datetime-local"
                            min={minDateStr}
                            max={maxDateStr}
                            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-[12px_4px_12px_4px] focus:outline-none focus:border-lime-400 text-white text-xs font-bold [color-scheme:dark]"
                            value={pickupDateTime}
                            onChange={(e) => setPickupDateTime(e.target.value)}
                        />
                        <span className="text-[10px] text-cyan-200/40 block mt-1">En fazla bugüne veya yarına sipariş oluşturulabilir.</span>
                    </div>

                    <div>
                        <label className="text-[10px] uppercase font-black tracking-widest text-cyan-300 block mb-1.5">Dükkan Sahibine Not (Opsiyonel)</label>
                        <textarea
                            rows={3}
                            placeholder=""
                            className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-[12px_4px_12px_4px] focus:outline-none focus:border-lime-400 text-white text-xs font-medium resize-none"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-lime-500 hover:bg-lime-600 text-cyan-950 font-black text-xs uppercase tracking-wider rounded-[14px_4px_14px_4px] transition-all transform hover:scale-[1.02] border-b-4 border-lime-700 shadow-md mt-6"
                    >
                        Siparişi Hazırla & WhatsApp'a Gönder 🚀
                    </button>
                </form>
            </div>

        </div>
    );
}