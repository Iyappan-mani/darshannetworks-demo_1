import React from 'react'
import '../css/WhatWeDo.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatWeDo = () => {
    return (
        <div className='conatinerWhatWeDo'>
            <p style={{ textAlign: 'center' }}>Our Expertise</p>
            <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                We Specialize In Creating Unforgettable Weddings
            </h1>

            <div className='boxContainer d-lg-flex d-sm-block'>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-1.png" class="attachment-full size-full wp-image-81" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">CREATIVE WEDDING DESIGN</h5>
                    <p class="elementor-image-box-description mt-4">We create unforgettable weddings with custom themes and beautiful décor</p>
                </div>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-2.png" class="attachment-full size-full wp-image-80" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">FABRICATION & DECOR</h5>
                    <p class="elementor-image-box-description mt-4">Our in-house team brings your wedding ideas to life with precision and style.</p>
                </div>
                <div className='box1'>
                    <img width="116" height="99" src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/icon-3.png" class="attachment-full size-full wp-image-79" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">WEDDING PLANNING & EXECUTION</h5>
                    <p class="elementor-image-box-description mt-4">We handle every detail, ensuring a seamless and stress-free celebration.</p>
                </div>
            </div>

            <div className='completeProjectContainer'>
                <p style={{ textAlign: 'center', }}>How we complete you project?</p>
                <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', }}>We do all this for you.</h1>

                <div className='d-lg-flex d-sm-block justify-content-around p-4'>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-2.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Creative Design</h5>
                    </div>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-3.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Development</h5>
                    </div>
                    <div className='box1 mt-5'>
                        <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-4.png" class="imageBox" alt="">
                        </img>
                        <h5 class="mt-4">Complete the project</h5>
                    </div>
                </div>
            </div>
            <div className='completeProjectContainer1  d-lg-flex d-sm-block  justify-content-between'>
                <div className=' align-content-sm-center align-items-sm-center pe-5'>
                    <p style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#333',
                        textAlign: 'left',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '20px',
                        fontFamily: "'Arial', sans-serif"
                    }}>
                        About Us
                    </p>
                    <h1 className='dealingText' style={{ fontWeight: 'bold', }}>Every Detail Counts</h1>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>We are a renowned event planning company based in Kuala Lumpur & Selangor, specializing in creating unforgettable experiences.</p>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>From the first idea to the final celebration, we’re dedicated to turning your vision into reality, ensuring every detail reflects your unique style. Get a personalized quote in just 30 minutes!</p>
                    <Button className="btn-small12">
                        Contact Us
                    </Button>
                </div>
                <div>
                    <img src="https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-5.png" class="bigImage" alt="">
                    </img>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo