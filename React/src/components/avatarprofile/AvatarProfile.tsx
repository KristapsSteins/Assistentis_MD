import { useRef } from "react";
import avatar from "../../assets/man.png";
import style from "./AvatarProfile.module.scss";

const AvatarImage = () => {
    const selectedPathRef = useRef(null);

    const handlePathClick = (event: React.MouseEvent<SVGPathElement>) => {
        const selectedPath = event.target as SVGPathElement;
        if (selectedPath.classList.contains(style.pathSelected)) {
            selectedPath.classList.remove(style.pathSelected);
        } else {
            selectedPath.classList.add(style.pathSelected);
        }
    };
    return (
        <>
            <img src={avatar} alt="avatar" />
            <svg viewBox="0 171 600 900" ref={selectedPathRef} className={style.svg} >
                <path 
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 293 390 l -2 -20 l -3 -6 l -5 -6 l -2 -6 l -1 -6 l 0 -37 l 2 -6 l 5 -6 l 7 -4 l 16 -6 l 6 -1 l 12 0 l 6 1 l 6 2 l 6 4 l 6 7 l 5 8 l 0 18 l -2 6 l -0 25 l -4 6 l -4 3 l -1 6 l -2 12 l -2 6">
                </path>
                <path 
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 293 390 l 0 6 l -4 4 l -8 7 l -8 6 l -8 5 l -8 1 l -6 0 l 0 100 l 2 6 l 130 0 l 2 -6 l 0 -100 l -6 0 l -8 -1 l -8 -5 l -8 -6 l -8 -7 l -4 -4 l -1 -7 l -45 0">
                </path>
                <path 
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 252 523 l 5 20 l 0 20 l -2 20 l -2 20 l -4 20 l -3 20 l -3 20 l -4 24 l 159 0 l -4 -24 l -5 -20 l -3 -20 l -2 -20 l -2 -20 l -2 -20 l 0 -10 l 0 -10 l 2 -10 l 1 -10">
                </path>
                <path 
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 239 686 l -2 20 l -0 20 l 2 20 l 1 20 l 3 20 l 1 20 l -2 29 l 43 14 l 5 -14 l 4 -14 l 4 -28 l 6 -28 l 7 -28 l 5 -28 l 2 -24">
                </path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 398 686 l 2 20 l 0 20 l 0 20 l 0 10 l -1 10 l 0 20 l 0 20 l 3 20 l 1 5 l -44 14 l -8 -14 l -3 -14 l -4 -14 l -3 -14 l -3 -14 l -4 -14 l -5 -14 l -5 -14 l -5 -14 l 0 -14 l -1 -14 l -1 -5"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 242 834 l -9 20 l -5 20 l 0 20 l 0 20 l 2 20 l 2 20 l 1 20 l -1 5 l -2 5 l 0 18 l 31 0 l 3 -4 l 0 -13 l -2 -5 l 0 -15 l 2 -15 l 5 -15 l 8 -15 l 3 -10 l 2 -10 l 1 -10 l 0 -10 l 0 -10 l 0 -10 l 2 -12"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 402 830 l 9 20 l 5 20 l 3 20 l 0 20 l -1 20 l 1 20 l 0 20 l 0 5 l 2 5 l 1 5 l 0 15 l -31 0 l -3 -4 l 0 -11 l 2 -11 l -2 -11 l -2 -11 l -4 -11 l -4 -11 l -5 -11 l -5 -11 l -3 -11 l -1 -11 l 1 -11 l 0 -11 l 0 -8 l -6 -12"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 422 999 l 3 10 l 8 10 l 5 8 l 1 13 l -5 5 l -5 3 l -5 1 l -15 1 l -8 -1 l -6 -7 l -5 -7 l 0 -7 l 1 -7 l -2 -7 l 1 -7 l 1 -8"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 230 1001 l -3 10 l -8 10 l -5 8 l 0 12 l 6 6 l 6 2 l 6 2 l 6 1 l 9 0 l 5 -2 l 5 -5 l 5 -9 l 0 -7 l -2 -4 l 2 -5 l 1 -10 l -2 -9"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 252 419 l -10 0 l -10 6 l -6 6 l -5 6 l -9 16 l -2 16 l 1 20 l -4 16 l -4 20 l -6 10 l -8 10 l -6 10 l -5 10 l -2 10 l -4 15 l -4 15 l -8 15 l -12 23 l 32 12 l 3 -12 l 7 -12 l 9 -12 l 9 -12 l 8 -12 l 9 -15 l 5 -12 l 4 -12 l 8 -20 l 10 -20"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 383 420 l 10 0 l 10 6 l 6 6 l 5 6 l 9 16 l 2 16 l -1 20 l 4 16 l 4 20 l 6 10 l 8 10 l 6 10 l 5 10 l 5 10 l 4 15 l 4 15 l 8 15 l 12 23 l -32 12 l -3 -12 l -7 -12 l -9 -12 l -9 -12 l -8 -12 l -9 -15 l -5 -12 l -4 -12 l -8 -20 l -10 -20"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 490 643 l 10 3 l 10 9 l 10 14 l -3 5 l -9 0 l 2 5 l 4 5 l 2 5 l 2 5 l 0 5 l -1 5 l -5 0 l -13 -20 l 10 26 l -1 4 l -6 2 l -15 -31 l 8 31 l 0 4 l -4 2 l -4 -3 l -2 -3 l -7 -31 l 0 27 l -4 3 l -4 -3 l -2 -4 l -1 -4 l 0 -17 l -6 -15 l -2 -17"
                ></path>
                <path
                    className={style.pathSelected}
                    onClick={handlePathClick}
                    d="m 149 643 l -10 3 l -10 9 l -10 14 l 3 5 l 9 0 l -2 5 l -4 5 l -2 5 l -2 5 l 0 5 l 1 5 l 5 0 l 13 -20 l -10 26 l 1 4 l 6 2 l 15 -31 l -8 31 l 0 4 l 4 2 l 4 -3 l 2 -3 l 7 -31 l 0 27 l 4 3 l 4 -3 l 2 -4 l 1 -4 l 0 -17 l 6 -15 l 2 -17"
                ></path>
            </svg>
        </>
    );
};

export default AvatarImage;
