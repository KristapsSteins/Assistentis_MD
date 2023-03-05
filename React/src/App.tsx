import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import Avatar from "./pages/Avatar/Avatar";
import AudioPlayer from "./pages/AudioPlayer/AudioPlayer";

function App() {


    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/avatar" element={<Avatar />} />
                <Route path="/video_player" element={<AudioPlayer />} />
            </Routes>
        </>
    );
}

export default App;
