import style from "./Avatar.module.scss";
import html2canvas from "html2canvas";
import { useRef } from "react";
import saveAs from "file-saver";
import AvatarProfile from "../../components/avatarprofile/AvatarProfile";

function Avatar() {
    const canvasRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        if (canvasRef.current) {
            html2canvas(canvasRef.current).then((canvas) => {
                saveAs(canvas.toDataURL(), "avatar.png");
            });
        }
    };

    return (
        <>
            <div className={style.avatarWrapper}>
                <span className={style.avatarTitle}>
                    Customize Your Avatar
                </span>
                <div ref={canvasRef} className={style.avatar}>
                    <AvatarProfile />
                </div>
                <button 
                    onClick={handleDownload} 
                    className={style.downloadBtn}
                >
                            Download
                </button>
            </div>
        </>
    );
}

export default Avatar;