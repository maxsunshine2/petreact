import { useState } from "react";
import memesData from "../memesData";

export default function Memgen() {
  const [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemeImage, setMemeImages] = useState(memesData);

  function getMemeImage(e) {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme, randomImage: url
    }) );
  }
  return (
    <main className="">
      <div className="form">
        <input type="text" className="form--input" placeholder="top text" />
        <input type="text" className="form--input" placeholder="bottom text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>

      <img src={meme.randomImage} alt="img-view" className="meme--image" />
    </main>
  );
}
