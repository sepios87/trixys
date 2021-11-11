import React, { useState, useEffect } from 'react';
import classes from './Vague.module.scss';
import useWindowDimensions from './../useWindowDimensions';

const Vague = () => {
    const size = 1920;
    const { width, height } = useWindowDimensions();

    return (
        <>
            <img className={classes.logo} src="svg/logo.svg" alt="logo" />
            <svg
                className={classes.vague1}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={size}
                height={size}
                preserveAspectRatio="xMidYMid"
                viewBox={`0 0 ${size} ${size}`}
            >
                <g style={{transform : 'scale(5)'}}>
                    <linearGradient
                        id="lg-0.29842378160630834"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                    >
                        <stop stopColor="#f6c952" offset="0"></stop>
                        <stop stopColor="#ffc388" offset="1"></stop>
                    </linearGradient>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="0s"
                            values="M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z;M0 0L 0 250.36432133146397Q 51 178.18379212665405  102 159.47725707987627T 204 -18.94150754097538T 306 -66.58833541669983L 306 0 Z;M0 0L 0 182.41469627155692Q 51 122.66909570264957  102 105.01394912908002T 204 67.82784391178691T 306 -99.30838040351745L 306 0 Z;M0 0L 0 228.42543842578573Q 51 142.83663458617897  102 114.47324156937736T 204 -9.337771633703426T 306 -56.47590973474547L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-3.3333333333333335s"
                            values="M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z;M0 0L 0 278.2996792773374Q 51 206.74910223273355  102 172.55643212659862T 204 26.000838764349254T 306 -122.41126523921872L 306 0 Z;M0 0L 0 233.47999386176232Q 51 212.8509033961567  102 194.84568871291685T 204 45.01238816781304T 306 -65.29086367448375L 306 0 Z;M0 0L 0 195.5993151932361Q 51 101.61444356154269  102 77.83196348693434T 204 56.314204330963435T 306 -164.96701629150587L 306 0 Z"
                        ></animate>
                    </path>
                    <path
                        d=""
                        fill="url(#lg-0.29842378160630834)"
                        opacity="0.5"
                    >
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-6.666666666666667s"
                            values="M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z;M0 0L 0 140.65061527941552Q 51 132.18328080856173  102 103.97832584903564T 204 20.201805162821188T 306 -83.71674019504087L 306 0 Z;M0 0L 0 221.114749520734Q 51 132.35403638426357  102 105.94320226874972T 204 23.542012624034413T 306 -11.518939933766148L 306 0 Z;M0 0L 0 161.5878217322325Q 51 133.77615903651417  102 110.75482384135945T 204 -13.465822835454361T 306 -34.21643098282419L 306 0 Z"
                        ></animate>
                    </path>
                </g>
            </svg>

            <svg
                className={classes.vague2}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={size}
                height={size}
                preserveAspectRatio="xMidYMid"
                viewBox={`0 0 ${size} ${size}`}
            >
                <g>
                    <linearGradient
                        id="lg-0.4895634189693667"
                        x1="0"
                        x2="1"
                        y1="0"
                        y2="0"
                    >
                        <stop stopColor="#f6c952" offset="0"></stop>
                        <stop stopColor="#f6c952" offset="1"></stop>
                    </linearGradient>
                    <path d="" fill="url(#lg-0.4895634189693667)" opacity="0.5">
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="0s"
                            values="M0 0L 0 292.8020505036138Q 51 146.89067549816798  102 126.37896120785068T 204 -4.579122860571573T 306 -43.100137598927745L 306 0 Z;M0 0L 0 260.3143961002746Q 51 221.54118908595882  102 186.14344660346876T 204 60.38723920530106T 306 -14.102789913212689L 306 0 Z;M0 0L 0 222.15994782747126Q 51 188.41034010394736  102 148.84658557129052T 204 -20.32496011278542T 306 -80.16763706813344L 306 0 Z;M0 0L 0 292.8020505036138Q 51 146.89067549816798  102 126.37896120785068T 204 -4.579122860571573T 306 -43.100137598927745L 306 0 Z"
                        ></animate>
                    </path>
                    <path d="" fill="url(#lg-0.4895634189693667)" opacity="0.5">
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-3.3333333333333335s"
                            values="M0 0L 0 218.78856157507005Q 51 162.67332536612298  102 147.6726556251948T 204 -17.73903350707849T 306 -75.5417510680403L 306 0 Z;M0 0L 0 224.79809842741236Q 51 102.40611341118006  102 83.94081232334274T 204 18.96929477393968T 306 -64.45591756644916L 306 0 Z;M0 0L 0 276.97384730728055Q 51 215.96638054044962  102 191.04234007459422T 204 21.53110447343846T 306 -46.26439205388505L 306 0 Z;M0 0L 0 218.78856157507005Q 51 162.67332536612298  102 147.6726556251948T 204 -17.73903350707849T 306 -75.5417510680403L 306 0 Z"
                        ></animate>
                    </path>
                    <path d="" fill="url(#lg-0.4895634189693667)" opacity="0.5">
                        <animate
                            attributeName="d"
                            dur="10s"
                            repeatCount="indefinite"
                            keyTimes="0;0.333;0.667;1"
                            calcmod="spline"
                            keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
                            begin="-6.666666666666667s"
                            values="M0 0L 0 228.72507342029522Q 51 205.1579651539381  102 188.0120652845588T 204 62.114908971544565T 306 -105.40736578695245L 306 0 Z;M0 0L 0 283.067928194898Q 51 160.37904972727165  102 124.89135003518892T 204 60.747781282855414T 306 -60.17401169327832L 306 0 Z;M0 0L 0 236.3749240603563Q 51 186.72858204131646  102 163.92443070902203T 204 43.007718028507014T 306 -138.43469256720462L 306 0 Z;M0 0L 0 228.72507342029522Q 51 205.1579651539381  102 188.0120652845588T 204 62.114908971544565T 306 -105.40736578695245L 306 0 Z"
                        ></animate>
                    </path>
                </g>
            </svg>
        </>
    );
};

export default Vague;
