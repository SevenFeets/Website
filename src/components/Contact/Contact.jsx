import { useState } from "react";
import './Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic herez
        console.log('Form submitted:', formData);
        alert('Message sent! (Demo only)');
        handleReset();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact__wrapper" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="button-group">
                    <button type="submit" className="btn-submit">Send Message</button>
                    <button
                        type="button"
                        className="btn-reset"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;