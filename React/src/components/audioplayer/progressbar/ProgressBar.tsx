import style from "./ProgressBar.module.scss";

type ProgressBarProps = {
  progressBarRef: React.RefObject<HTMLInputElement>;
  audioRef: React.RefObject<HTMLAudioElement>;
  timeProgress: number;
  duration: number;
  formatTime: (time: number) => string;
}

const ProgressBar = ({ 
    progressBarRef, 
    audioRef, 
    timeProgress, 
    duration,
    formatTime 
}: ProgressBarProps) => {
    const handleProgressChange = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = parseInt(progressBarRef.current?.value || "0");
        }
    };

    return (
        <div className={style.progress}>
            <span className="timeCurrent">{formatTime(timeProgress)}</span>
            <input
                type="range"
                ref={progressBarRef}
                defaultValue="0"
                onChange={handleProgressChange}
            />
            <span className="time">{formatTime(duration)}</span>
        </div>
    );
};

export default ProgressBar;