import React from "react";

export default function Text(props) {
  if (props.text.text) {
    return <span className="Text me-5">{props.text.text}</span>;
  } else {
    return null;
  }
}
