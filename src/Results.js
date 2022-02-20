import React from "react";

import "./Results.css";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.phonetics.map(function (phonetic, index) {
          return (
            <span key={index}>
              <Phonetic phonetic={phonetic} />
            </span>
          );
        })}

        <div className="subheading mt-2">
          <h2>{props.results.word}</h2>

          <p>{props.results.phonetics[0].text}</p>
        </div>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
