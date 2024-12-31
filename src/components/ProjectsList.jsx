import React from 'react'
import '../css/ProjectsList.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Card from './Card';
const ProjectsList = () => {

    const listOfImage = [
        {
            image: require('../Image/img-37.jpg')
        },
        {
            image: require('../Image/img-38.jpg')
        },
        {
            image: require('../Image/img-39.jpg')
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-40.png'
        },
    ]
    const BrandOfImage = [
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-14.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-15.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-16.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-17.png'
        },


    ]
    const BrandOfImage2 = [
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-21.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-18.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-19.png'
        },
        {
            image: 'https://ez-interories-architecture.eoxysthemes.com/wp-content/uploads/2024/12/img-20.png'
        },


    ]


    return (
        <div style={{ marginTop: 100 }} className='w-100 '>
            <div className='ProductListContainer'>
                <p style={{ textAlign: 'center', color: '#ffff', paddingTop: 30 }}>LOOK AT OUR PRICING INFO FOR</p>
                <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', paddingBottom: 40 }}>Venues & Vendors</h1>
                <div style={{ paddingLeft: 30, paddingRight: 30, }} className='imageContainer justify-content-around mt-5 pb-5'>
                    <Card />
                </div>

                <div className="w-100 d-lg-flex d-sm-block justify-content-around p-4" style={{ position: "relative" }}>
                    <h1
                        className="dealingText44"
                        style={{
                            fontWeight: "normal",
                            position: "absolute",
                            bottom: "-15%",
                            left: "32%",
                            width:'35%',
                            textAlign:'center',
                            // transform: "translateX(-50%),translateY(-50%) ", 
                            zIndex: 1,
                            color: "#fffff",
                            
                        }}
                    >
                     Follow Us On Instagram
                    </h1>

                    <h1
                        className="dealingText44"
                        style={{
                            fontWeight: "bold",
                            position: "absolute",
                            // bottom: "50%",
                            // left: "50%",
                            // transform: "translate(-50%, 50%)",
                            zIndex: 0,
                            color: "#fff",
                            opacity: 0.2,
                        }}
                    >
                        Venues & Vendors
                    </h1>
                    <div
                        className="boxImage"
                        style={{
                            width: "45%",
                            height: "40vw",
                            borderRadius: 10,
                            backgroundColor: "#f3f3f3", // Placeholder color for image background
                        }}
                    ></div>
                    <div
                        className="boxImage1"
                        style={{
                            width: "45%",
                            height: "40vw",
                            borderRadius: 10,
                            backgroundColor: "#f3f3f3", // Placeholder color for image background
                        }}
                    ></div>
                </div>


            </div>




            {/* <div className='BrandContainer'>
                <p style={{ textAlign: 'center', paddingTop: 80 }}>awesome partner</p>
                <h1 className='dealingText' style={{ textAlign: 'center', fontWeight: 'bold', color: '#463B29' }}>For materials</h1>
                <div style={{ paddingLeft: 30, paddingRight: 30, }} className='imageContainer justify-content-evenly mt-5 pb-5'>
                    {
                        BrandOfImage?.map((item, index) => (
                            <img width="180" height="70" src={item.image} style={{marginTop:30}} class="attachment-full size-full wp-image-79" />

                        ))
                    }
                </div>
                <div style={{ paddingLeft: 30, paddingRight: 30, }} className='imageContainer justify-content-evenly mt-lg-3 pb-5'>
                    {
                        BrandOfImage2?.map((item, index) => (
                            <img width="180" height="70" src={item.image} style={{marginTop:30}} class="attachment-full size-full wp-image-79" />

                        ))
                    }
                </div>
            </div> */}

            <div className='ProductListContainer1 pe-3 pe-lg-4 ps-lg-4 ps-3 pb-5'>
                <p style={{ textAlign: 'center', color: '#463B29', paddingTop: 30 }}>Review</p>
                <h1 className='dealingText' style={{ marginBottom: 50, textAlign: 'center', fontWeight: 'bold', color: '#463B29' }}>Word from wise</h1>
                <Swiper
                    modules={[Autoplay]}
                    loop
                    // slidesPerView={3}
                    spaceBetween={20}
                    autoplay={{
                        delay: 2000, // Delay in milliseconds
                        disableOnInteraction: false, // Autoplay won't stop after user interaction
                    }}
                    pagination={{ clickable: true }}

                    breakpoints={{
                        640: {
                            slidesPerView: 1, // Mobile view
                        },
                        768: {
                            slidesPerView: 2, // Tablet view
                        },
                        1024: {
                            slidesPerView: 3, // Desktop view
                        },
                    }}
                >
                    <SwiperSlide style={{}}>
                        <div className='slideContainer w-100'>
                            <div className='titleNameround'>
                                <FaQuoteRight color='#ffff' />
                            </div>
                            <p className='titleName'>Rayan kyle</p>
                            <p>NYC , USA</p>
                            <p className='titleNameConatent'>The interior of my restaurant is so pleasing and soothing that customer get to enjoy the food with all the senses</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideContainer'>
                            <div className='titleNameround'>
                                <FaQuoteRight color='#ffff' />
                            </div>
                            <p className='titleName'>Messi cook</p>
                            <p>WD , USA</p>
                            <p className='titleNameConatent'>EZ transformed our vision into a stunning reality! Their attention to detail and innovative designs exceeded all our expectations</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideContainer'>
                            <div className='titleNameround'>
                                <FaQuoteRight color='#ffff' />
                            </div>
                            <p className='titleName'>Sophia R</p>
                            <p>BST , USA</p>
                            <p className='titleNameConatent'>EZ transformed our vision into a stunning reality! Their attention to detail and innovative designs exceeded all our expectations</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideContainer'>
                            <div className='titleNameround'>
                                <FaQuoteRight color='#ffff' />
                            </div>
                            <p className='titleName'>R</p>
                            <p>BST , USA</p>
                            <p className='titleNameConatent'>EZ transformed our vision into a stunning reality! Their attention to detail and innovative designs exceeded all our expectations</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default ProjectsList