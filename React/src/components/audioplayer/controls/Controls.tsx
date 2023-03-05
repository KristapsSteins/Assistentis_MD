import { useState, useEffect, useRef, useCallback } from "react";
import style from "./Controls.module.scss";
import { Tracks } from "../../../pages/AudioPlayer/AudioPlayer";
import { skipForward, skipBackward, handlePrevious } from "../../../functions/Functions";

import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
} from "react-icons/io5";

import {
    IoMdVolumeHigh,
    IoMdVolumeOff,
    IoMdVolumeLow,
} from "react-icons/io";


type ControlsProps = {
    audioRef: React.RefObject<HTMLAudioElement>;
    progressBarRef: React.RefObject<HTMLInputElement>;
    setTimeProgress: (time: number) => void;
    duration: number;
    allTracks: Tracks[]
    trackIndex: number
    setTrackIndex: (index: number) => void;
    handleNextClick: () => void;
  }

const Controls = ({ 
    audioRef, 
    progressBarRef, 
    setTimeProgress, 
    duration, 
    allTracks, 
    trackIndex, 
    setTrackIndex,
    handleNextClick
}: ControlsProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [showVolumeInput, setShowVolumeInput] = useState(false);

    const playAnimationRef = useRef<number | null>();

    const repeat = useCallback(() => {
        if (audioRef.current && progressBarRef.current) {
            const currentTime = audioRef.current.currentTime;
            setTimeProgress(currentTime);
            progressBarRef.current.value = currentTime.toString();
            progressBarRef.current.style.setProperty(
                "--range-progress",
                `${(progressBarRef.current.valueAsNumber / duration) * 100}%`
            );
        
            playAnimationRef.current = requestAnimationFrame(repeat);
        }
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.code === "Space") {
            event.preventDefault();
            togglePlayPause();
        }
    };

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
        if (audioRef.current) {
            audioRef.current.playbackRate = speed;
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat, speed]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
            audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleKeyDown]);

    const skipForwardHandler = () => {
        skipForward(audioRef);
    };
    
    const skipBackwardHandler = () => {
        skipBackward(audioRef);
    };
    
    const handlePreviousHandler = () => {
        handlePrevious(trackIndex, allTracks, setTrackIndex);
    };

    return (
        <div className={style.controlsWrapper}>
            <div 
                className={style.volume}
                onMouseEnter={() => setShowVolumeInput(true)}
                onMouseLeave={() => setShowVolumeInput(false)}
            >
                <button 
                    onClick={() => setMuteVolume((prev) => !prev)}
                >
                    {muteVolume || volume < 5 ? (
                        <IoMdVolumeOff />
                    ) : volume < 40 ? (
                        <IoMdVolumeLow />
                    ) : (
                        <IoMdVolumeHigh />
                    )}
                </button>
                {showVolumeInput && (
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) => setVolume(parseInt(e.target.value))}
                        style={{
                            background: `linear-gradient(to right, #fff ${volume}%, #ccc ${volume}%)`,
                        }}
                    />
                )}
            </div>
            <div className={style.controls}>
                <button onClick={handlePreviousHandler}>
                    <IoPlaySkipBackSharp />
                </button>
                <button onClick={skipBackwardHandler}>
                    <IoPlayBackSharp />
                </button>
                <div className={style.playBtn}>
                    <button onClick={togglePlayPause} className={style.playBtn}>
                        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                    </button>
                </div>
                <button onClick={skipForwardHandler}>
                    <IoPlayForwardSharp />
                </button>
                <button onClick={handleNextClick}>
                    <IoPlaySkipForwardSharp />
                </button>
            </div>
            <div>
                <button 
                    onClick={() => setSpeed(speed === 1 ? 2 : 1)}
                    className={style.speedBtn}
                >
                    {speed}x
                </button>
            </div>
        </div>
    );
};

export default Controls;
