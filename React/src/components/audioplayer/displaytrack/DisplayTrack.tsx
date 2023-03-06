import { BsMusicNoteBeamed } from "react-icons/bs";
import style from "./DisplayTrack.module.scss";
import { Tracks } from "../../../pages/AudioPlayer/AudioPlayer";
import { onLoadedMetadata } from "../../../functions/functions";

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
                {allTracks ? (
                    <h4>{allTracks[trackIndex]?.title}</h4>
                ) : (
                    <div>
                        <span>
                            <BsMusicNoteBeamed />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DisplayTrack;