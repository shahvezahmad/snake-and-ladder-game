import React from 'react';
import { AiTwotonePlusSquare, AiFillGitlab, AiTwotoneDownCircle, AiFillHeart, } from "react-icons/ai"
import Play from '../Play/Play';
import Sidebar1 from '../Sidebar/Sidebar';
import Rightsidebar from '../Rightbar/Rightbar';

const Leftbar = () => {
    const [slide1, cslide1] = React.useState(localStorage.getItem("slide1"));
    const [start, cstart] = React.useState("true"===localStorage.getItem("start"));
    const [a, ca] = React.useState(0);
    const [b, cb] = React.useState(0);
    const [c, cc] = React.useState(0);
    const [d, cd] = React.useState(0);

    return (
        <>
            <Rightsidebar cstart={cstart} />
            <div className={`${start ? "hidden" : ""} bg-slate-300 text-black absolute top-0 w-[300px] h-[100%] `}>
                <div>
                    <form className='py-[5%] px-[8%]'>
                        <label className={`${!start ? "" : "hidden"} `}>Enter Number of Players</label>
                        <br />

                        <span className={` ${!start ? "" : "hidden"} flex w-[100%] flex-row gap-[9%]`}>
                            <input type="range" onChange={(e) => { localStorage.setItem("slide1", slide1); cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} min="1" max="4" value={slide1} id="myRange" />
                            <input type='number' min="1" max="4" onChange={(e) => { cslide1(e.target.value); localStorage.setItem("slide1", slide1) }} value={slide1} className='w-[45px] h-[25px]  text-black bg-slate-300 border-solid border px-2 py-[1px]' />
                        </span>
                        <br />
                        <div className='flex gap-[10%] top-0 justify-center'>
                            <span className={` ${slide1 >= 1 ? "" : "hidden"}${!start ? "" : "hidden"}`}>

                                <AiTwotonePlusSquare className={` ${!start ? "" : "hidden"} ${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600`} />
                                <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                            </span>
                            <br />

                            <span className={` ${slide1 >= 2 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                                <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                            </span>
                            <br />

                            <span className={` ${slide1 >= 3 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillHeart className={`${eval(slide1) >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                                <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                            </span>
                            <br />

                            <span className={` ${slide1 >= 4 ? "" : "hidden"} ${!start ? "" : "hidden"}`}>

                                <AiFillGitlab className={`${slide1 >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                                <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                            </span>
                        </div>
                        <button type="button" onClick={() => {
                            cstart(!start);
                            localStorage.setItem("n1", 0);
                            localStorage.setItem("n2", 0);
                            localStorage.setItem("n3", 0);
                            localStorage.setItem("n4", 0);
                            localStorage.setItem("start", !start);
                            localStorage.setItem("slide1", slide1);
                        }} className={`${!start ? "" : "hidden"} md:hidden text-center flex justify-center w-[100%] bg-green-500 text-slate-200 mt-4 h-[45px] items-center text-2xl hover:scale-110 hover:shadow-lg `}>Start The Game</button>
                    </form>

                </div>
            </div>
            <div className='bg-pink-400 text-red-400'>
                <Sidebar1 />
            </div>
            <Play start={start} slide1={slide1} a={a} b={b} c={c} d={d} />
        </>
    )
}

export default Leftbar;