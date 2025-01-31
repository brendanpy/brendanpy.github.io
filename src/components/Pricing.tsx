import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section className="pricing">
            <h2>Pricing Plans</h2>
            <div className="pricing-plan">
                <h3>Basic Plan</h3>
                <p>Perfect for individuals looking to manage their daily tasks.</p>
                <p>Price: $9.99/month</p>
                <button>Sign Up</button>
            </div>
            <div className="pricing-plan">
                <h3>Pro Plan</h3>
                <p>Ideal for professionals needing advanced features.</p>
                <p>Price: $19.99/month</p>
                <button>Sign Up</button>
            </div>
            <div className="pricing-plan">
                <h3>Enterprise Plan</h3>
                <p>Customized solutions for businesses and teams.</p>
                <p>Contact us for pricing</p>
                <button>Contact Sales</button>
            </div>
        </section>
    );
};

export default Pricing;