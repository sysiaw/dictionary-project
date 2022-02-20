import React from "react";

import "./Phonetic.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    const sound = new Audio(props.phonetic.audio);

    const playSound = () => {
      sound.play();
    };

    return (
      <span className="Phonetic">
        <audio src={sound}></audio>
        <FontAwesomeIcon icon={faCirclePlay} size="2x" onClick={playSound} />
      </span>
    );
  } else {
    return null;
  }
}
