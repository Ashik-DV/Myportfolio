import React from "react";
import "./Contact.css"; // Importing ultra-stylish CSS
import Swal from 'sweetalert2';
function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "262d725a-8d82-44ef-9af3-4e5b52590dbe");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    title: "Success",
                    text: "Message Sent Successfully!",
                    icon: "success"
                });
                setResult("");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("An error occurred. Please try again.");
        }
    };


    return (
        <div>
       
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


                <div>
        <section className="contact">
    <form onSubmit={onSubmit}>
        <h2>Quick Contact</h2>
        <div className='input-box'>
            <label>Full name</label>
            <input type="text" className='field' placeholder='Enter your name' name='name'required />
        </div>
        <div className='input-box'>
            <label>Email</label>
            <input type="email" className='field' placeholder='Enter your email address' name='email'required />
        </div>
        <div className='input-box'>
            <label>Message</label>
            <textarea name='request' id='' className='fieldmess' placeholder='Enter Message Here! ' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
    </form>
   </section>
        </div>
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
        </div>
    );
}

export default Contact;
