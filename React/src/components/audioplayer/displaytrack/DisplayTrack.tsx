import { onLoadedMetadata } from "../../../utilis/functions";
import { Tracks } from "../../../pages/AudioPlayer/AudioPlayer";

import style from "./DisplayTrack.module.scss";

type DisplayTrackProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
  setDuration: (value: number) => void;
  progressBarRef: React.RefObject<HTMLInputElement>;
  allTracks?: Tracks[]
  trackIndex: number
  handleNextClick: () => void;
};

const DisplayTrack = ({
    audioRef,
    setDuration,
    progressBarRef,
    allTracks = [],
    trackIndex,
    handleNextClick,
}: DisplayTrackProps) => {

    return (
        <div>
            <audio
                src={`${allTracks[trackIndex]?.src}`}
                ref={audioRef}
                onLoadedMetadata={() => onLoadedMetadata(audioRef, setDuration, progressBarRef)}
                onEnded={handleNextClick}
            />
            <div className={style.audioInfo}>
                <h4>{allTracks[trackIndex]?.title}</h4>
            </div>
        </div>
    );
};

export default DisplayTrack;