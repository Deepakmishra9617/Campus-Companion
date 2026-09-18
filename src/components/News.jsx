import React from "react";
import SectionTitle from "./SectionTitle";

const news = [
  [
    "ADMISSIONS",
    "Admissions & application updates",
    "Keep this card connected to official notices before publishing.",
    "12 SEP",
  ],
  [
    "PLACEMENTS",
    "Placement drive announcement",
    "Recruitment-related information can be surfaced here.",
    "08 SEP",
  ],
  [
    "STUDENT ACHIEVEMENT",
    "Students shine at innovation challenge",
    "Showcase verified student wins, projects and recognitions.",
    "04 SEP",
  ],
  [
    "EXAMINATION",
    "Academic & examination notice",
    "Use this space for timely academic announcements.",
    "01 SEP",
  ],
];

export default function News() {
  return (
    <section className="section soft-bg">
      <div className="container">

        <SectionTitle
          eyebrow="NEWS & ANNOUNCEMENTS"
          title="Stay in the loop."
          text="Important campus updates, achievements and announcements."
        />

        <div className="news-grid">
          {news.map(([tag, title, description, date]) => (
            <article className="news-card" key={title}>

              <div className="news-date">
                {date}
              </div>

              <span>
                {tag}
              </span>

              <h3>
                {title}
              </h3>

              <p>
                {description}
              </p>

              <button>
                Read update →
              </button>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}