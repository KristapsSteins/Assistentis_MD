import Controls from "../../components/audioplayer/controls/Controls";
import DisplayTrack from "../../components/audioplayer/displaytrack/DisplayTrack";
import ProgressBar from "../../components/audioplayer/progressbar/ProgressBar";
import "../../styles/CustomizeProgressBar/CustomizeProgressBar.scss";
import style from "./AudioPlayer.module.scss";
import { useState, useRef, useEffect } from "react";
import DisplayAllTracks from "../../components/audioplayer/displayalltracks/DisplayAllTracks";
import { fetchData, formatTime, handleKeyDown, handleNext } from "../../functions/Functions";


export type Tracks = {
    title: string;
    src: string;
    duration: number;
  };

function AudioPlayer() {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [trackIndex, setTrackIndex] = useState(0);
    const [allTracks, setAllTracks] = useState<Tracks[]>([]);
    
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        fetchData().then(data => {
            setAllTracks(data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
        const handleKeyDownEvent = handleKeyDown(audioRef);
        document.addEventListener("keydown", handleKeyDownEvent);
        return () => {
            document.removeEventListener("keydown", handleKeyDownEvent);
        };
    }, [audioRef]);


    const progressBarRef = useRef<HTMLInputElement>(null);

    const handleNextClick = () => {
        handleNext(trackIndex, setTrackIndex, allTracks);
    };

    const handleTrackClick = (index: number) => {
        setTrackIndex(index);
    };

    return (
        <div className={style.container}>
            <div className={style.player}>
                <DisplayTrack 
                    trackIndex={trackIndex}
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                    allTracks={allTracks}
                    handleNextClick={handleNextClick}
                />
                <Controls 
                    audioRef={audioRef}
                    progressBarRef={progressBarRef}
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                    allTracks={allTracks}
                    trackIndex={trackIndex}
                    setTrackIndex={setTrackIndex}
                    handleNextClick={handleNextClick}

                />
                <ProgressBar 
                    progressBarRef={progressBarRef} 
                    audioRef={audioRef} 
                    timeProgress={timeProgress}
                    duration={duration}
                    formatTime={formatTime}
                />
                <DisplayAllTracks 
                    allTracks={allTracks}
                    handleTrackClick={handleTrackClick}
                />
            </div>
        </div>
    );
}

export default AudioPlayer;
