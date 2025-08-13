export const metadata = {
    title: 'THE YOGA STUDIO - Premium Wellness Center',
    description:
        'Mind Relax, Revitalize, Self Care - Transform your wellness journey at The Yoga Studio',
};

import './globals.css';
import React from 'react';
import Footer from '../components/sections/FooterSection';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Footer />
            </body>
        </html>
    );
}


