import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import React from "react";
const departments = [
  "Computer Science & Engineering","CSE (Artificial Intelligence & Machine Learning)","Information Technology",
  "Electronics & Communication Engineering","Mechanical Engineering","Civil Engineering",
  "Electrical & Electronics Engineering","Master of Computer Applications","Management"
];

export default function Departments() {
  return <section className="section navy-section" id="departments">
    <div className="container">
      <SectionTitle eyebrow="DEPARTMENTS" title="Find your technical domain." text="Sample department listing for the website prototype. Verify the current official department list before publishing."/>
      <div className="dept-grid">{departments.map((d,i) => <div className="dept-card" key={d}><span>{String(i+1).padStart(2,"0")}</span><h3>{d}</h3><ArrowUpRight size={20}/></div>)}</div>
    </div>
  </section>;
}