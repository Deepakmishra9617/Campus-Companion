import { Award, BriefcaseBusiness, Building2, Rocket, UsersRound, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import React from "react";
const items = [
  ["Experienced Faculty", "Learn with mentors who connect concepts to practical outcomes.", GraduationCap],
  ["Industry-Oriented Education", "Build skills around real tools, projects and professional workflows.", BriefcaseBusiness],
  ["Modern Infrastructure", "Labs, learning spaces and facilities designed for hands-on learning.", Building2],
  ["Placement Opportunities", "Prepare for careers through training, projects and recruitment support.", Rocket],
  ["Innovation & Entrepreneurship", "Turn ideas into prototypes through competitions and maker culture.", Award],
  ["Student Clubs & Activities", "Find your community through coding, culture, sports and events.", UsersRound],
];

export default function WhyChoose() {
  return <section className="section soft-bg">
    <div className="container">
      <SectionTitle eyebrow="WHY TIT" title="More than a degree." text="A modern campus experience built around skills, confidence and opportunities." center/>
      <div className="feature-grid">{items.map(([t,d,I]) => <article className="feature-card" key={t}><div className="icon-box"><I/></div><h3>{t}</h3><p>{d}</p><span className="card-arrow">↗</span></article>)}</div>
    </div>
  </section>;
}