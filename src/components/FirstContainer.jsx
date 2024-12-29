import React from 'react'
import '../css/FirstContainer.css';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const FirstContainer = () => {
    return (
        <div className='conatiner'>
            <h1 style={{ width: '70%', color: '#ffff', }} className='headerText ' >Darshan Indian Wedding Vendors brings dreams to life with design, planning, and craftsmanship</h1>
            <Button className="btn-small1 d-flex align-items-center mb-3 mt-3 ">
                Contact Us
            </Button>
        </div> 
    )
}

export default FirstContainer