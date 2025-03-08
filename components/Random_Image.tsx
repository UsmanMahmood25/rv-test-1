"use client";

import { ReactElement, useEffect, useState } from "react";
import tp from "@/styles/Team.module.scss";

const divs: ReactElement[] = [
    <div key="1" className={tp.t_img1}></div>,
    <div key="2" className={tp.t_img2}></div>
];

export default function RandomImg() {
    const [randomDiv, setRandomDiv] = useState<ReactElement | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * divs.length);
        setRandomDiv(divs[randomIndex]);
        setTimeout(() => setLoaded(true), 1);
    }, []);

    if (!loaded) {
        return null; // Don't render anything until the image is selected
    }

    return ( 
        <div>
            {randomDiv || <div className={tp.t_img1}></div>}
        </div>
    );
}