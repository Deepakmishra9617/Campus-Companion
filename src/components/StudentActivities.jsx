import { Braces, Trophy, Mic2, Lightbulb, Users, Presentation } from "lucide-react";
import SectionTitle from "./SectionTitle";
import React from "react";
const acts = [["Hackathons","Solve real-world problems with your team.",Trophy],["Coding Clubs","Practice DSA, development and competitive programming.",Braces],["Technical Fests","Learn, build and compete around technology.",Presentation],["Cultural Fests","Showcase creativity beyond the classroom.",Mic2],["Workshops","Learn directly through hands-on sessions.",Lightbulb],["Student Communities","Meet peers, leaders and collaborators.",Users]];

export default function StudentActivities() {
 return <section className="section soft-bg"><div className="container"><SectionTitle eyebrow="STUDENT LIFE" title="Build. Compete. Create." text="The strongest campus memories often happen outside lectures." center/><div className="activity-grid">{acts.map(([t,d,I])=><div className="activity" key={t}><I/><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>;
}