import React from "react";export default function SectionTitle({ eyebrow, title, text, center=false }) {
  return (
    <div className={`section-title ${center ? "center" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}