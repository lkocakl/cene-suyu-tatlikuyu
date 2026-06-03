import React from 'react';
import Navbar from '../components/Navbar'; // <-- Buradaki 'navbar' yolunu 'Navbar' olarak düzelttik

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#fafaf9]">
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12 animate-pulse">
                    <div className="h-8 w-64 bg-stone-200 rounded-md mb-4"></div>
                    <div className="h-4 w-96 bg-stone-200 rounded-md"></div>
                </div>

                {/* Yanıp sönen iskelet kartlar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className="bg-white rounded-[2rem_8px_2rem_8px] p-4 border border-stone-100 h-80 flex flex-col justify-between">
                            <div className="animate-pulse">
                                <div className="h-40 w-full bg-stone-200 rounded-[1.5rem_4px_1.5rem_4px] mb-4"></div>
                                <div className="h-3 w-16 bg-stone-200 rounded mb-2"></div>
                                <div className="h-5 w-3/4 bg-stone-200 rounded mb-2"></div>
                                <div className="h-8 w-full bg-stone-100 rounded mt-4"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}