import { Tracks } from "../pages/AudioPlayer/AudioPlayer";

import axios from "axios";

export async function fetchAllTracks() {
    const response = await axios.get("http://localhost:3004/tracks");
    return response.data;
}

export const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
        const minutes = Math.floor(time / 60);
        const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(time % 60);
        const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
};

export const handleKeyDown = (audioRef: React.MutableRefObject<HTMLAudioElement | null>) => (event: KeyboardEvent) => {
    if (event.code === "Space") {
        if (audioRef.current?.paused) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    }
};

export function handleNext(trackIndex: number, setTrackIndex: (index: number) => void, allTracks: Tracks[]) {
    if (trackIndex >= allTracks.length - 1) {
        setTrackIndex(0);
    } else {
        setTrackIndex(trackIndex  + 1);
    }
}

export const skipForward = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
        audioRef.current.currentTime += 15;
    }
};
  
export const skipBackward = (audioRef: React.RefObject<HTMLAudioElement>) => {
    if (audioRef.current) {
        audioRef.current.currentTime -= 15;
    }
};
  
export const handlePrevious = (
    trackIndex: number,
    allTracks: Tracks[],
    setTrackIndex: (index: number) => void
) => {
    if (trackIndex === 0) {
        const lastTrackIndex = allTracks.length - 1;
        setTrackIndex(lastTrackIndex);
    } else {
        setTrackIndex(trackIndex - 1);
    }
};

export const handleKeyDownControls = (event: KeyboardEvent) => {
    if (event.code === "Space") {
        event.preventDefault();
    }
};

export const formatDuration = (seconds: number) => {
    // round to nearest whole number
    const roundedSeconds = Math.round(seconds);
    const minutes = Math.floor(roundedSeconds / 60);
    const remainingSeconds = roundedSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
};

export const onLoadedMetadata = (audioRef: React.RefObject<HTMLAudioElement>, setDuration: (value: number) => void, progressBarRef: React.RefObject<HTMLInputElement>) => {
    const seconds = audioRef.current?.duration;
    if (seconds) {
        setDuration(seconds);
        if (progressBarRef.current) {
            progressBarRef.current.max = String(seconds);
        }
    }
};