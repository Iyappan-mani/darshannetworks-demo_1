import React from 'react'
import '../css/WhatWeDo.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const WhatWeDo = () => {
    return (
        <div className='conatinerWhatWeDo'>
            <p style={{ textAlign: 'center' }}>Our Expertise</p>
            <h1 className='dealingText4' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                We Specialize In Creating Unforgettable Weddings
            </h1>

            <div className='boxContainer d-lg-flex d-sm-block'>
                <div className='box1'>
                    <img width="170" height="110" style={{ borderRadius: 10 }} src={require('../Image/img-1.jpg')} class="attachment-full size-full wp-image-81" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">CREATIVE WEDDING DESIGN</h5>
                    <p class="elementor-image-box-description mt-4">We create unforgettable weddings with custom themes and beautiful décor</p>
                </div>
                <div className='box1'>
                    <img width="170" height="110" style={{ borderRadius: 10 }} src={require('../Image/img-2.jpg')} class="attachment-full size-full wp-image-80" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">FABRICATION & DECOR</h5>
                    <p class="elementor-image-box-description mt-4">Our in-house team brings your wedding ideas to life with precision and style.</p>
                </div>
                <div className='box1'>
                    <img width="170" height="110" style={{ borderRadius: 10 }} src={require('../Image/img-3.jpg')} class="attachment-full size-full wp-image-79" alt="">
                    </img>
                    <h5 class="elementor-image-box-title">WEDDING PLANNING & EXECUTION</h5>
                    <p class="elementor-image-box-description mt-4">We handle every detail, ensuring a seamless and stress-free celebration.</p>
                </div>
            </div>
            {/* 
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
            </div> */}
            <div className='completeProjectContainer1  d-lg-flex d-sm-block  justify-content-between'>
                <h1 className='dealingText4' style={{ fontWeight: 'bold', }}>Every Detail Counts</h1>
                <div className=' align-content-sm-center align-items-sm-center pe-5 ms-4 '>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>WE ARE AN AWARD-WINNING EVENT PLANNING COMPANY BASED IN Kuala Lumpur & Selangor.</p>
                    <p style={{ marginTop: 30, textAlign: "initial" }}>FROM INITIAL CONCEPT TO THE BIG DAY, WE ARE HERE TO BRING YOUR DREAM EVENT TO LIFE, ALWAYS KEEPING YOUR WISHES AND VISION IN MIND.</p>

                </div>
            </div>

            <div className='longimage'>

            </div>
        </div>
    )
}

export default WhatWeDo