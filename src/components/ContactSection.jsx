// src/components/ContactSection.js
import React, { useState } from 'react';
import './ContactSection.css'; // Import custom CSS

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            alert(data.message);
            
            // Clear the form after successful submission
            setFormData({
                name: '',
                email: '',
                age: '',
                message: '',
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <section id="contact" className="py-5 text-white bg-dark contact-section">
            <div className="container">
                <h2 className="text-center mb-4 contact-heading">Contact Me</h2>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="age">Age</label>
                                <input type="number" className="form-control" id="age" name="age" placeholder="Enter your age" value={formData.age} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="3" placeholder="Enter your message" value={formData.message} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
