import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Wing AI. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://twitter.com/wingai" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com/wingai" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com/wingai" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;