/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import { useState, useRef } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Slider from "react-slick";
import home_style from "@/styles/Home.module.scss";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/*
----------------------------------------------
About Us Content
----------------------------------------------
*/
export const WhatWeDo = () => {
    const [activeChoice, setActiveChoice] = useState<InfoContent | ''>('');
    type InfoContent = 'INNOVATION' | 'SUSTAINABILITY' | 'PERFORMANCE';

    const whatWeDoInfo: Record<InfoContent, string[]> = {
        "INNOVATION": [
            "At the forefront of ReVOLT's mission is restoration by breathing life into old vehicles.",
            "We prioritize innovation, aiming to implement untested ideas with every project we undertake.",
            "The club specializes in the transformation of gas vehicles into modern electric powertrains.",
        ],
        "PERFORMANCE": [
            "Performance-focused upgrades ensure maximum efficiency and power in our EV conversions.",
            "Our designs emphasize lightweight, high-performance materials for optimal speed and endurance.",
            "We fine-tune every component to achieve superior performance on the track and road.",
        ],
        "SUSTAINABILITY": [
            "Sustainability is key—our projects aim to reduce carbon footprints by repurposing existing vehicles.",
            "We emphasize recyclable materials and energy-efficient designs in every project.",
            "By converting gas vehicles to electric, we reduce emissions and contribute to a cleaner future.",
        ]
    };

    // Single nodeRef for the currently active content
    const nodeRef = useRef(null);

    return (
        <div className={home_style.wwd_c_main}>
            <div className={home_style.wwd_c_m}>
                <div className={home_style.wwd_text}>
                    <p className={home_style.wwd_t_style}>
                        WE FOCUS ON
                    </p>
                </div>
                <div className={home_style.wwd_c_m_buttons}>
                    {Object.keys(whatWeDoInfo).map(info => (
                        <div className={home_style.wwd_c_m_b_type} key={info}>
                            <button 
                                className={home_style.wwd_c_m_b_t_style} 
                                onClick={() => setActiveChoice(info as InfoContent)}
                            >
                                {info}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className={home_style.wwd_c_m_info}>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={activeChoice} 
                        nodeRef={nodeRef} // Single ref assigned dynamically
                        timeout={750} 
                        classNames={{
                            enter: home_style.text_enter,
                            enterActive: home_style.text_enter_active,
                            exit: home_style.text_exit,
                            exitActive: home_style.text_exit_active,
                        }}
                        
                    >
                        <div ref={nodeRef}>
                            {activeChoice ? (
                                <ul>
                                    {whatWeDoInfo[activeChoice].map((infoChoice, index) => (
                                        <li className={home_style.wwd_c_m_i_style} key={index}>
                                            {infoChoice}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className={home_style.temp_text}>Click on one of the buttons to learn more.</p>
                            )}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
    );
};


/*
----------------------------------------------
Picture Slider For About Us
----------------------------------------------
*/
export const images = [
    '/hp_imgs/slide_show/img1.JPG',
    '/hp_imgs/slide_show/img2.JPG',
    '/hp_imgs/slide_show/img3.JPG',
    '/hp_imgs/slide_show/img4.JPG',
    '/hp_imgs/slide_show/img5.JPG',
    '/hp_imgs/slide_show/img6.JPG',
];
export interface PicSliderProps {
    images: string[];
};
export const PictureSlider: React.FC<PicSliderProps> = ({ images }) => {

    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,            // Using Custom Ones
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        afterChange: (current: number) => setCurrentSlide(current), // Update current slide
        responsive: [
            {
                breakpoint: 949,
                settings : {
                    slidesToShow: 2,
                    arrows: true,
                    dots: false,
                },
            },
        ],
    };

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(index);
        }
    };

    return (
        <div className={home_style.pic_slider}>
            <Slider {...settings} ref={sliderRef}>
                {images.map((image, index) => (
                    <div key={index} className={home_style.p_s_image}>
                        <img src={image} alt={`Slide ${index + 1}`}  />
                    </div>
                ))}
            </Slider>
            {/* Custom Dots */}
            <div className={home_style.custom_dots}>
                {images.map((_, index) => (
                <button
                    key={index}
                    className={`${home_style['dot']} ${currentSlide === index ? home_style['active'] : ''}`}
                    onClick={() => goToSlide(index)}
                />
                ))}
            </div>
        </div>
    );
};