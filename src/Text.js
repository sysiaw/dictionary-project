import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTextSlash } from "@fortawesome/free-solid-svg-icons";

export default function Text(props) {
  if (props.text.text) {
    return <span className="Text">{props.text.text}</span>;
  } else {
    return (
      <span className="Text">
        <FontAwesomeIcon icon={faTextSlash} />
      </span>
    );
  }
}
