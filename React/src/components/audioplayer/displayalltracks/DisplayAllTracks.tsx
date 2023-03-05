import style from "./DisplayAllTracks.module.scss";
import { Tracks } from "../../../pages/AudioPlayer/AudioPlayer";
import { BsMusicNoteList } from "react-icons/bs";
import { formatDuration } from "../../../functions/Functions";

type DisplayAllProps = {
    allTracks: Tracks[],
    handleTrackClick: (index: number) => void
  }

function DisplayAllTracks({ allTracks, handleTrackClick }: DisplayAllProps) {
    return (
        <>
            <div className={style.tracksWrapper}>
                <hr></hr>
                {allTracks.map((allTracks, index) => (
                    <div 
                        key={index} 
                        onClick={() => handleTrackClick(index)}
                    >
                        <div className={style.trackList}>
                            <div className={style.trackInfo}>
                                <BsMusicNoteList />
                                {allTracks.title}
                            </div>
                            <div>
                                {formatDuration(allTracks.duration)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default DisplayAllTracks;
