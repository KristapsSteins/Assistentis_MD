import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import fs from "fs";
import path from "path";
import { getAudioDurationInSeconds } from "get-audio-duration";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

const tracksDir = "./tracks";
const tracksDirJSON = "./src/tracks";

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, tracksDir)));

const tracks = [];

fs.readdir(tracksDirJSON, async function (err, files) {
  if (err) {
    console.log(err);
    return;
  } else {
    for (const file of files) {
      if (
        file.endsWith(".mp3") ||
        file.endsWith(".wav") ||
        file.endsWith(".aac")
      ) {
        const filePath = path.join(__dirname, tracksDir, file);
        const duration = await getAudioDurationInSeconds(filePath);
        console.log(duration);
        tracks.push({
          title: file.replace(/\.(mp3|wav|aac)$/, ""),
          src: `http://localhost:3004/tracks/${file}`,
          duration: duration,
        });
      }
    }
  }
});

app.get("/tracks", (req: Request, res: Response) => {
  res.json(tracks);
});

app.get("/tracks/:filename", (req: Request, res: Response) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, tracksDir, filename);
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  // Set the headers for the response
  const headers = {
    "Content-Length": fileSize,
    "Content-Type": "audio/mpeg",
  };

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;
    headers["Content-Range"] = `bytes ${start}-${end}/${fileSize}`;
    headers["Accept-Ranges"] = "bytes";
    headers["Content-Length"] = chunkSize;
    res.writeHead(206, headers);
    const stream = fs.createReadStream(filePath, { start, end });
    stream.on("open", () => stream.pipe(res));
    stream.on("error", (streamErr) => res.end(streamErr));
  } else {
    res.writeHead(200, headers);
    const stream = fs.createReadStream(filePath);
    stream.on("open", () => stream.pipe(res));
    stream.on("error", (streamErr) => res.end(streamErr));
  }
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
