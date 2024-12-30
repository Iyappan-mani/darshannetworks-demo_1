import React from 'react'
import '../css/FirstContainer.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FirstContainer = () => {


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

    ]
    return (
        <div className='conatiner'>
            <p style={{ textAlign: 'center', color: '#ffff', paddingTop: 30 }}>Full-service event planning company</p>
            <h1 className='dealingText1' style={{ textAlign: 'center', paddingBottom: 40 }}>
                Unforgettable Wedding <br /> Memories
            </h1>
            <p className='dealingText2' style={{ textAlign: 'center', color: '#ffff', paddingBottom: 10 ,marginBottom:"10%"}}>BOOK A CONSULTATION
                <span class="StylableButton2545352419__icon" aria-hidden="true" data-testid="stylablebutton-icon"><span>
                    <svg data-bbox="20 20 160 160" viewBox="0 0 200 200" height="2vw" width="2vw" xmlns="http://www.w3.org/2000/svg" data-type="shape">
                        <g>
                            <path d="M180 78.564L141.411 100 180 121.436l-44.137-.73 22.701 37.858-37.858-22.701.73 44.137L100 141.411 78.564 180l.73-44.137-37.858 22.701 22.701-37.858-44.137.73L58.589 100 20 78.564l44.137.73-22.701-37.858 37.858 22.701L78.564 20 100 58.589 121.436 20l-.73 44.137 37.858-22.701-22.701 37.858 44.137-.73z"></path>
                        </g>
                    </svg>
                </span></span>
            </p>
            <div className='image-container' style={{ gap: "5%" }}>
                <img
                    className='imageConatiners1'
                    style={{ borderRadius: 15 }}
                    src={require('../Image/img-37.jpg')}
                />
                <img
                    className='imageConatiners1 center-image'
                    style={{ borderRadius: 15 }}
                    src={require('../Image/img-38.jpg')}
                />
                <img
                    className='imageConatiners1'
                    style={{ borderRadius: 15 }}
                    src={require('../Image/img-39.jpg')}
                />
            </div>


        </div>
    )
}

export default FirstContainer