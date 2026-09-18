import React from "react";import Hero from "../components/Hero";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Academics from "../components/Academics";
import Departments from "../components/Departments";
import Admissions from "../components/Admissions";
import Placements from "../components/Placements";
import CampusLife from "../components/CampusLife";
import StudentActivities from "../components/StudentActivities";
import Events from "../components/Events";
import News from "../components/News";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home({onAskAI}) {
 return <><Hero onAskAI={onAskAI}/><About/><WhyChoose/><Academics/><Departments/><Admissions/><Placements/><CampusLife/><StudentActivities/><Events/><News/><Testimonials/><section id="ai" className="ai-banner"><div className="container"><div><span className="eyebrow">TIT CAMPUS AI</span><h2>Your campus questions, one conversation away.</h2><p>Ask about admissions, courses, placements, academics, facilities and events.</p></div><button className="btn btn-light" onClick={onAskAI}>Open Campus AI →</button></div></section><Contact/></>;
}