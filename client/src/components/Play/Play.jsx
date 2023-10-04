import React from 'react'
import { AiTwotonePlusSquare, AiFillGitlab, AiTwotoneDownCircle, AiFillHeart } from "react-icons/ai"
import Home from '../Home/Home';
import Winner from '../Winner/Winner';

const Play = ({ start, slide1 }) => {
    var ashow = [1, 2, 3, 4];
    var [n1, cn1] = React.useState(eval(localStorage.getItem("n1")));
    var [n2, cn2] = React.useState(eval(localStorage.getItem("n2")));
    var [n3, cn3] = React.useState(eval(localStorage.getItem("n3")));
    var [n4, cn4] = React.useState(eval(localStorage.getItem("n4")));
    var [ben, cben] = React.useState(true);
    var [cnm, ccnm] = React.useState(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    var [dcss, cdcss] = React.useState(true);
    var [result, cresult] = React.useState(false);
    var [victor, cvictor] = React.useState(0);
    var [pointer, cpointer] = React.useState(0);
    var arrchoice = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    // var arrchoice = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];

    var snakeh = [80, 29, 88, 99];
    var snakee = [45, 6, 36, 34];
    var ladderh = [96, 62, 47];
    var laddere = [31, 39, 24];
    React.useEffect(() => {
        if (start === false) {
            var h1 = localStorage.getItem("n1");
            var h2 = localStorage.getItem("n2");
            var h3 = localStorage.getItem("n3");
            var h4 = localStorage.getItem("n4");
            cn1(eval(h1));
            cn2(eval(h2));
            cn3(eval(h3));
            cn4(eval(h4));
            return;
        }
    }, [start])

    const snakeLadder = (value1, value2, cnum) => {
        const ladderMap = {
            [laddere[0]]: ladderh[0],
            [laddere[1]]: ladderh[1],
            [laddere[2]]: ladderh[2],
            [laddere[3]]: ladderh[3],
        };
    
        const snakeMap = {
            [snakeh[0]]: snakee[0],
            [snakeh[1]]: snakee[1],
            [snakeh[2]]: snakee[2],
            [snakeh[3]]: snakee[3],
        };
    
        // Check if the sum is present in the ladderMap
        if (laddere.includes(value1 + cnum)) {
            value2(ladderMap[value1 + cnum]);
        }
    
        // Check if the sum is present in the snakeMap
        if (snakeh.includes(value1 + cnum)) {
            value2(snakeMap[value1 + cnum]);
        }
    };
    
    const btnc = () => {
        setTimeout(() => {
            cdcss(false)
            setTimeout(() => {

                cdcss(true)
                cpointer((pointer + 1) % localStorage.getItem("slide1"));
                var cnum = arrchoice[Math.floor(Math.random() * (17 - 0 + 1)) + 0];
                if (pointer === 0) {

                        if (n1 + cnum > 100) {

                        }
                        else if (n1 + cnum === 100) {
                            cvictor(1);
                            cresult(true);
                        }
                        else {
                            cn1(n1 + cnum);
                        }

                    snakeLadder(n1, cn1, cnum);

                }
                else if (pointer === 1) {

                    if (n2 + cnum > 100 ) {

                    }
                    else if (n2 + cnum === 100) {
                        cvictor(2);
                        cresult(true);
                    }
                    else {
                        cn2(n2 + cnum);
                    }
                    snakeLadder(n2,cn2, cnum);
                }
                else if (pointer === 2) {

                    if (n3 + cnum > 100) {

                    }
                    else if (n3 + cnum === 100) {
                        cvictor(3);
                        cresult(true);
                    }
                    else {
                        cn3(n3 + cnum);
                    }

                    snakeLadder(n3,cn3,cnum);
                }
                else if (pointer === 3) {

                    if (n4 + cnum > 100) {

                    }
                    else if (n4 + cnum === 100) {
                        cvictor(4);
                        cresult(true);
                    }
                    else {
                        cn4(n4 + cnum);
                    }
                    snakeLadder(n4,cn4,cnum);
                }
                cben(true);
                ccnm(cnum);

                localStorage.setItem("n" + `${pointer + 1}`, eval("n" + `${pointer + 1}`) + cnum);
            }, 2000);

            cben(false);
        }, 300);
    }
    return (
        <>
            <div style={{ display: start ? '' : 'none' }} className={` ${start ? "" : "hidden"} ${start ? "" : "hidden"} castbox bg-slate-300 text-black top-0 w-[300px] flex ffsmall  flex-col justify-center items-center h-[100%] `}>
                <AiTwotonePlusSquare className={` ${start ? "" : "hidden"} ${dcss ? "dicecss" : "dicecss2"} mt-[0px] text-[200px] dicecss text-red-400 flex justify-center items-center text-center `} />
                <div className={` ${start ? "" : "hidden"} mt-[-60%] mb-[10%] text-white z-10bigd text-[100px]`}>{cnm}</div>
                <div className={`${start ? "" : "hidden"} mt-[60px] `}>
                    <div className={` ${start ? "" : "hidden"} text-xl font-bold `}><h1>
                        Player {ashow[pointer]} Turn
                    </h1>
                    </div>
                </div>
                <div className={` flex gap-[10%] top-0 mt-4 justify-center ${start ? "" : "hidden"}`}>
                    <span className={`${slide1 >= 1 ? "" : "hidden"}${start ? "" : "hidden"} `}>

                        <AiTwotonePlusSquare className={`${slide1 >= 1 ? "" : "hidden"}text-red-500 text-xl border-solid border-black border-spacing-0 border bg-red-600 z-[2002] opacity-100`} />
                        <span className={`${slide1 >= 1 ? "" : "hidden"}`}>P1</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 2 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiTwotoneDownCircle className={`${slide1 >= 2 ? "" : "hidden"}text-xl text-blue-500 border-solid border-black border-spacing-0 border rounded-full`} />
                        <span className={`${slide1 >= 2 ? "" : "hidden"}`}>P2</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 3 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiFillHeart className={`${slide1 >= 3 ? "" : "hidden"}text-pink-600 text-xl`} />
                        <span className={`${slide1 >= 3 ? "" : "hidden"}`}>P3</span>
                    </span>
                    <br />
                    <span className={`${slide1 >= 4 ? "" : "hidden"} ${start ? "" : "hidden"}`}>

                        <AiFillGitlab className={`${slide1 >= 4 ? "hidden" : "hidden"}text-purple-700 text-xl`} />
                        <span className={`${slide1 >= 4 ? "" : "hidden"}`}>P4</span>
                    </span>
                </div>
                <div className={` ${start ? "" : "hidden"}`}>
                    <div onClick={() => { btnc() }} className={`${!ben ? "hidden" : ""} mt-[100%] py-[15px] rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-green-700 `}>
                        Cast the Die
                    </div>
                    <div className={`${!ben ? "" : "hidden"} mt-[100%] py-[15px] rounded-lg hover:shadow-lg active:scale-105 text-xl hover:scale-110 cursor-pointer text-slate-100 text-bold px-[20px] bg-red-400 `}>
                        Cast the Die
                    </div>
                </div>
            </div>

            <Home p1={n1} p2={n2} p3={n3} p4={n4} />
            <Winner opene={result} winn={victor} cresult={cresult} />
        </>
    )
}

export default Play;