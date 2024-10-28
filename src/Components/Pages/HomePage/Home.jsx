import React, { useEffect } from 'react';
import "./Home.css";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../Shared/Navbar/Navbar';


const Home = () => {

    useEffect(()=>{
        const next = document.querySelector(".next");
        const prev = document.querySelector(".prev");

        const handleNext = () => {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            slide.appendChild(items[0])

        }

        const handlePrev = () => {
            const items = document.querySelectorAll(".item");
            const slide = document.querySelector(".slide");
            slide.prepend(items[items.length - 1])

        }

        next.addEventListener("click", handleNext);
        prev.addEventListener("click", handlePrev);
        return ()=> {
            next.removeEventListener("click", handleNext);
            prev.removeEventListener("click", handlePrev);
        }
    },[])

    return (
        <div className='poppins'>
            <div className="slide-container">

                <div className="slide">

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/8Dq6pvp/kolkata.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Kolkata</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam, minima nobis alias iure ullam!</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/9phDM9X/dhaka.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Dhaka</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium, qui minima odit quos exercitationem?</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/0VN79R0/sajek.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Sajek</div>
                            <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio sed reiciendis culpa pariatur praesentium quisquam.</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/LrvXs38/saintmartin.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Saintmartin</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatibus minus, repudiandae quo vitae quidem!</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/4SyPs71/sundorbon.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Sundorbon</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eaque sit necessitatibus cum quis in.</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/m5SxrGm/coxbazar.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Cox's bazar</div>
                            <div className="des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa veniam deserunt inventore et nulla sunt?</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/0hVV64r/rangamati.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Rangamati</div>
                            <div className="des">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique nisi, pariatur ea quibusdam quisquam corrupti.</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                    <div className="item" style={{backgroundImage: "url(https://i.ibb.co.com/SsR6RJn/mongla.png)"}}>
                        <div className="content">
                            <div className="name cinzel">Mongla</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat rem, modi praesentium consequuntur fugiat veritatis!</div>
                            <button className="btn btn-active">Booking <FaArrowRight /></button>
                        </div>
                    </div>

                </div>

                <div className="control-btn">
                    <button className="prev btn btn-circle text-base"><MdOutlineArrowBackIos /></button>
                    <button className="next btn btn-circle text-base"><MdOutlineArrowForwardIos /></button>
                </div>

            </div>
        </div>
    );
};

export default Home;