import React from "react";import { Code2, Cpu, GraduationCap, Laptop, Network, Briefcase } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const programs = [
  ["Undergraduate Programs", "Build strong engineering fundamentals with structured academic learning.", GraduationCap],
  ["Postgraduate Programs", "Advance your expertise with focused higher-education pathways.", Briefcase],
  ["Engineering Programs", "Explore engineering disciplines designed for technical careers.", Cpu],
  ["Computer Science & IT", "Programming, systems, software engineering and emerging technology.", Laptop],
  ["AI & Machine Learning", "Explore data, intelligent systems, deep learning and generative AI.", Code2],
  ["Management", "Develop business, leadership and professional decision-making skills.", Network],
];

export default function Academics() {
  return <section className="section" id="academics">
    <div className="container">
      <SectionTitle eyebrow="ACADEMICS" title="Learn what the future demands." text="Explore broad academic pathways and technology-focused learning areas."/>
      <div className="program-grid">{programs.map(([t,d,I]) => <article className="program-card" key={t}><div className="program-top"><div className="icon-box"><I/></div><span>PROGRAM</span></div><h3>{t}</h3><p>{d}</p><Link to="/academics">Explore Program →</Link></article>)}</div>
    </div>
  </section>;
}