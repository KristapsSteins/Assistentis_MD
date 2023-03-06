import { Tracks } from "../../../pages/AudioPlayer/AudioPlayer";
import { BsMusicNoteList } from "react-icons/bs";
import { formatDuration } from "../../../utilis/functions";

import style from "./DisplayAllTracks.module.scss";

type DisplayAllProps = {
    allTracks: Tracks[],
    handleTrackClick: (index: number) => void
  }

const DisplayAllTracks = ({ allTracks, handleTrackClick }: DisplayAllProps) => (
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


export default DisplayAllTracks;
