import { ArrowRight, Sparkles, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";
export default function Hero({ onAskAI }) {
  return (
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy reveal">
          <div className="eyebrow"><Sparkles size={15}/> Technology • Innovation • Excellence</div>
          <h1>Shape the future at <span>TIT Bhopal.</span></h1>
          <p className="hero-sub">
            Empowering future technocrats through technology, innovation, industry exposure and a vibrant student community.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/academics">Explore Programs <ArrowRight size={18}/></Link>
            <Link className="btn btn-light" to="/admissions">Admissions</Link>
            <button className="video-link" onClick={onAskAI}><PlayCircle size={18}/> Ask Campus AI</button>
          </div>
          <div className="trust-row">
            <span>✓ Industry-oriented learning</span>
            <span>✓ Student innovation</span>
            <span>✓ Career support</span>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-photo">
            <div className="photo-overlay">
              <div><small>TECHNOCRATS INSTITUTE OF TECHNOLOGY</small><strong>BHOPAL</strong></div>
              <span className="pulse-dot"></span>
            </div>
          </div>
          <div className="float-card fc-one"><b>25+</b><span>Years of excellence*</span></div>
          <div className="float-card fc-two"><b>10K+</b><span>Alumni community*</span></div>
          <div className="float-card fc-three"><b>AI & ML</b><span>Future-focused learning</span></div>
        </div>
      </div>
      <div className="hero-bottom container">
        <div><b>50+</b><span>Programs*</span></div>
        <div><b>Industry</b><span>Connections</span></div>
        <div><b>Active</b><span>Student Communities</span></div>
        <small>*Illustrative website content — verify current figures with official TIT sources.</small>
      </div>
    </section>
  );
}