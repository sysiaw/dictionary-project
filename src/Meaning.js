import React from "react";

import "./Meaning.css";

import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <ul key={index}>
            <li>
              {definition.definition}

              <Example example={definition.example} />

              <Synonyms synonyms={definition.synonyms} />
            </li>
          </ul>
        );
      })}
    </div>
  );
}
