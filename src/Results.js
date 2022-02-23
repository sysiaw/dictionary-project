import React from "react";

import "./Results.css";

import Phonetic from "./Phonetic";
import Text from "./Text";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <div className="subheading">
            <h3>{props.results.word}</h3>

            <p>{props.results.phonetic}</p>
          </div>

          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index} className="phonetics">
                <Phonetic phonetic={phonetic} />
                <Text text={phonetic} />
              </div>
            );
          })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
