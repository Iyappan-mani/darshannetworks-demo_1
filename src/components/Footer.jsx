import React from 'react';
import { motion } from 'framer-motion';
// import moment from 'moment';
import { FaFacebook, FaTwitter, FaPinterest, FaYoutube, FaAddressBook } from 'react-icons/fa';
import '../css/Footer.css';
import { HiMail } from 'react-icons/hi';
import { IoCall } from 'react-icons/io5';


const Footer = () => {
    const menuLinks = [
        {
            headTitle: "Help",
            links: [
                { title: "FAQ", path: "/" },
                { title: "Customer Service", path: "/" },
                { title: "About us", path: "/" },
                { title: "How we work", path: "/" },
                { title: "Delivery", path: "/" },
                { title: "Blog", path: "/" },
            ]
        },
    ];

    return (
        <footer className="footer_container bg-white py-4">
            <div className="footer-upper py-5">
                <div className="container">
                    <div className="row g-4 py-4">
                        {/* Left Side: About Us Section (col-6) */}
                        <motion.div
                            className="col-12 col-md-6 text-center text-md-start"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="h6 text-black fw-bold text-capitalize about-us-title">
                                About Us
                            </p>

                            <p className="text-black about-us-description">
                                With more than 15 years in business, we’re one of the most experienced web design and marketing agencies based in Penang, Malaysia.
                            </p>

                            {/* Social Icons in a Row */}
                            <div className="social_icons">
                                <FaFacebook className="social-icon" />
                                <FaTwitter className="social-icon" />
                                <FaPinterest className="social-icon" />
                                <FaYoutube className="social-icon" />
                            </div>

                            <div className="who-we-are mt-4 py-5">
                                <p className="h5 text-uppercase fw-bold text-warning">Who We Are:</p>
                                <p className="fs-6 text-black">
                                    We pride ourselves on delivering solutions that are clean, scalable, and designed with our clients' goals in mind. Whether it's a small business looking for a basic website or a large enterprise needing a dynamic platform, we tailor our services to match.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Side: Contact Form Section (col-6) */}
                        <motion.div
                            className="col-12 col-md-6 d-flex justify-content-center "
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <p className="h6 text-black fw-bold text-capitalize about-us-title">
                                    Contact Us
                                </p>
                                <div style={{ marginLeft: 10 }} className='d-flex mt-3 '>
                                    <HiMail color='#000' size={26} />
                                    <p style={{ color: '#000', marginLeft: 10 }} className='fs-7'>Darshannetworks1212@gmail.com </p>
                                </div>
                                <div style={{ marginLeft: 10 }} className='d-flex mt-3 '>
                                    <IoCall color='#000' size={26} />
                                    <p style={{ color: '#000', marginLeft: 10 }} className='fs-7'>+6011 2797 5729</p>
                                </div>
                                <div style={{ marginLeft: 10 }} className='d-flex mt-3 '>
                                    <FaAddressBook color='#000' size={26} />
                                    <p style={{ color: '#000', marginLeft: 10 }} className='fs-7'>20-08, Jalan Pauh Jaya, Bukit Mertajam 13700, Penang Malaysia </p>
                                </div>
                                {/* Contact Form */}
                                {/* <div className="form-container">
                                <form className="footer-form">
                                    <label>Name</label>
                                    <input type="text" placeholder="Allen Jones" className="footer-input" />
                                    <label>Email</label>
                                    <input type="email" placeholder="aljay126@gmail.com" className="footer-input" />
                                    <label>Phone</label>
                                    <input type="number" placeholder="+233546227893" className="footer-input" />
                                    <label>Message</label>
                                    <textarea placeholder="Write your message" className="footer-textarea"></textarea>
                                    <input type="submit" value="Send Message" className="footer-submit-button" />
                                </form>
                            </div> */}


                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="d-flex flex-column align-items-center py-4 gap-4">
                <motion.p
                    className="text-center text-black"
                    style={{ margin: '0' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    © 2013 - {'2025'}
                    <span style={{ color: '#ff6f00', marginRight: '8px' }}>Darshan Networks Sdn Bhd</span>
                    <small>(202403240506) (TR0308682-H)</small>
                    <a href="/privacy-policy" className="text-decoration-none text-black mx-2">Privacy Policy</a> /
                    <a href="/terms-of-service" className="text-decoration-none text-black mx-2">Terms of Service</a>
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
