import React from "react";
import useSound from "use-sound";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'


export default function Phonetics(props) {
  let phonetic = props.phonetics;
  let pronunciation = phonetic.audio;

  const [play] = useSound(pronunciation);

  if (pronunciation) {
    return (
      <div className="phonetics">
        <button  className="icon-button" onClick={play}>
      <FontAwesomeIcon icon={faCirclePlay} />
      </button>
        <span className="text ms-4">{phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}