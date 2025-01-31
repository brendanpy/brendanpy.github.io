import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Wing AI</h1>
                <p>Your intelligent assistant for managing daily tasks, finances, health, and schedules.</p>
                <Features />
            </main>
            <Footer />
        </div>
    );
};

export default Home;