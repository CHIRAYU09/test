import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from "react-icons/fa";
import { useState } from 'react';

export default function Carousel ({slides}) {

    let [currentSlide, setCurrentSlide] = useState(0);

    let previousSlide = () => {
        if(currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        }
        else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    let nextSlide = () => {
        if(currentSlide === slides.length - 1) {
            setCurrentSlide(0);
        }
        else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
    <div className="overflow-hidden relative">
        <div 
        className={`flex transition ease-out duration-40`} 
        style={{
            transform: `translateX(-${currentSlide*100}%)`,
        }}
        >
            {slides.map((s)=> {
                    return <img src={s}/>
                })
            }
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-orange-400 px-1 text-3xl">
        <button onClick={previousSlide}>
                <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
                <FaArrowCircleRight />
            </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {
                slides.map((s,i) => {
                    return(
                    <div 
                    onClick={()=> {
                        setCurrentSlide(i)
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-5 h-5 cursor-pointer ${
                        i == currentSlide ?"bg-orange-400":"bg-orange-100"
                    }`}>

                    </div>)
                })
            }
        </div>
    </div>);
}