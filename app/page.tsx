"use client";
import React from 'react';
import Header from '../components/sections/Navigation';
import Home from '../pages/Home';

export default function Page() {
    return (
        <div className="min-h-screen bg-warm-beige">
            <Header />
            <main>
                <Home />
            </main>
        </div>
    );
}


