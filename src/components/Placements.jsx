import { TrendingUp, Users, Building, Trophy, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";
import React from "react";
const stats = [["Placement","Assistance"],["Recruiting","Companies"],["Highest","Package"],["Average","Package"],["Students","Placed"]];
const logos = ["TECH", "NEXA", "INFRA", "CLOUD", "DIGITAL", "SYSTEMS", "GLOBAL", "SOFT"];

export default function Placements() {
  return <section className="section placement" id="placements">
    <div className="container">
      <div className="placement-head"><SectionTitle eyebrow="PLACEMENTS" title="Turn skills into opportunities." text="A placement-focused section for showcasing career preparation, recruiters and student outcomes."/><Link className="text-link light-link" to="/placements">Explore placements <ArrowRight size={17}/></Link></div>
      <div className="stats-grid">{stats.map(([a,b],i)=><div className="stat" key={i}><b>{a}</b><strong>{b}</strong><span>Current figures to be verified</span></div>)}</div>
      <div className="recruiters"><div><small>RECRUITER WALL</small><h3>Industry connections</h3></div><div className="logo-grid">{logos.map(l=><span key={l}>{l}</span>)}</div></div>
    </div>
  </section>;
}