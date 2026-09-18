import SectionTitle from "./SectionTitle";
import React from "react";
const cards = [
  ["Hostel","A supportive residential environment for students.","campus hostel"],
  ["Library","Spaces for focused study, research and collaboration.","college library"],
  ["Sports","Build teamwork, discipline and healthy competition.","college sports"],
  ["Clubs","Connect with communities around coding, culture and creativity.","student club"],
  ["Technical Events","Hackathons, workshops and technology-focused events.","college hackathon"],
  ["Labs","Hands-on learning through practical sessions and projects.","engineering laboratory"],
  ["Cultural Events","Celebrate talent, creativity and campus spirit.","college cultural festival"],
  ["Cafeteria","A social space to recharge between classes.","college cafeteria"]
];

export default function CampusLife() {
  return <section className="section" id="campus">
    <div className="container">
      <SectionTitle eyebrow="CAMPUS LIFE" title="Find your people. Build your story." text="A visual campus section designed to be populated with verified TIT photos later."/>
      <div className="campus-grid">{cards.map(([t,d,q],i)=><article className={`campus-card c${i+1}`} key={t}><div className="campus-placeholder"><span>{String(i+1).padStart(2,"0")}</span><small>PHOTO / {q.toUpperCase()}</small></div><div className="campus-card-content"><h3>{t}</h3><p>{d}</p></div></article>)}</div>
    </div>
  </section>;
}