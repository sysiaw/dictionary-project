import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        This project is{" "}
        <a
          href="https://github.com/sysiaw/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>
        , and coded by{" "}
        <a href="https://github.com/sysiaw" target="_blank" rel="noreferrer">
          Chara Siaw
        </a>
        , and is hosted on{" "}
        <a
          href="https://elegant-engelbart-f9896d.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </small>
    </div>
  );
}
