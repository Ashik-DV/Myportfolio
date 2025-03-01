import React from "react";
import "./Contact.css"; // Importing ultra-stylish CSS

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <p>
                Let’s connect! Whether you have a project, collaboration idea, or just want to say hi, feel free to reach out. 🚀
            </p>

            <div className="contact-details">
                <p><span>📞 Phone:</span> <a href="tel:+917337822465">+91 73378 22465</a></p>
                <p><span>📧 Email:</span> <a href="mailto:ashikkumarashik209@gmail.com">ashikkumarashik209@gmail.com</a></p>
                <p><span>🌐 Website:</span> <a href="https://ripponpettopmodel.blogspot.com/">Visit My Blog</a></p>
                <p><span>📍 Location:</span> <a href="https://www.google.co.in/maps/place/Shivamogga,+Karnataka">Shivamogga, Karnataka</a></p>
            </div>

            <p>You can also find me on:</p>

            <div className="social-links">
                <a href="https://www.linkedin.com/in/ashik-kumar-d-v-21826425a" target="_blank" rel="noopener noreferrer">
                    🔗 LinkedIn
                </a>
                <a href="https://www.instagram.com/ashik_rpt/" target="_blank" rel="noopener noreferrer">
                    📸 Instagram
                </a>
            </div>

            <div className="info">
                <p><span>🏡 Address:</span> Ripponpet, Hosanagar(T), Shivamogga(D)-577426</p>
            </div>
        </div>
    );
}

export default Contact;
