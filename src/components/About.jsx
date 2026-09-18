import { ArrowUpRight, Target, Lightbulb, Users } from "lucide-react";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-art">
          <div className="campus-illustration">
            <div className="sun"></div><div className="building b1"></div><div className="building b2"></div>
            <div className="building b3"></div><div className="road"></div><div className="tree t1"></div><div className="tree t2"></div>
          </div>
          <div className="image-caption"><span>01</span><b>Learning beyond classrooms</b><small>Campus • Labs • Clubs • Community</small></div>
        </div>
        <div>
          <SectionTitle eyebrow="ABOUT TIT" title="Where engineering meets ambition." text="TIT Bhopal is presented here as a student-first engineering campus focused on strong fundamentals, practical exposure, innovation and career readiness." />
          <p className="body-copy">The experience combines academic learning with projects, technical activities, competitions, workshops and opportunities to collaborate with peers.</p>
          <div className="mini-features">
            <div><Target/><span><b>Vision</b><small>Build capable, ethical and future-ready technocrats.</small></span></div>
            <div><Lightbulb/><span><b>Innovation</b><small>Encourage experimentation, projects and problem solving.</small></span></div>
            <div><Users/><span><b>Community</b><small>Grow through clubs, events, mentorship and teamwork.</small></span></div>
          </div>
          <Link className="text-link" to="/about">Discover TIT <ArrowUpRight size={17}/></Link>
        </div>
      </div>
    </section>
  );
}