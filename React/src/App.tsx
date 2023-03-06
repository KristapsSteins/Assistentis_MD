import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Homepage/Home";
import Avatar from "./pages/Avatar/Avatar";
import AudioPlayer from "./pages/AudioPlayer/AudioPlayer";

const App = () => ( 
    <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/avatar" element={<Avatar />} />
            <Route path="/video-player" element={<AudioPlayer />} />
        </Routes>
    </>
);

export default App;
