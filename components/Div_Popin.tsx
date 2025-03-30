"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import ps from "@/styles/Popin_Style.module.scss";

interface PopinProps {
    children: ReactNode;
}

export const PopInSection: FC<PopinProps> = ({ children }) => {
    // Specify ref type to allow null or an HTMLDivElement
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(ref.current!); // Using the non-null assertion operator
                }
            },
            { threshold: 0.15 } // Trigger when 7.5% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={` ${ps.pop_in} ${isVisible ? `${ps.pop_in_visible}` : ''}`}>
            {children}
        </div>
    );
};
