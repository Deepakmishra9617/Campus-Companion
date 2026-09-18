import React from "react";import { CheckCircle2, FileText, CalendarDays, ClipboardList } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { Link } from "react-router-dom";

const steps = [["01","Explore","Choose a program that matches your goals."],["02","Check eligibility","Review the applicable eligibility requirements."],["03","Prepare documents","Keep required academic and identity documents ready."],["04","Apply","Complete the applicable admission/application process."]];

export default function Admissions() {
  return <section className="section" id="admissions">
    <div className="container">
      <SectionTitle eyebrow="ADMISSIONS" title="Your next chapter starts here." text="A clear admission journey for students and families. Dates, fees and eligibility should be verified from official TIT notices."/>
      <div className="admission-layout">
        <div className="steps">{steps.map(([n,t,d]) => <div className="step" key={n}><b>{n}</b><div><h3>{t}</h3><p>{d}</p></div></div>)}</div>
        <div className="admission-panel">
          <div className="panel-glow"></div><h3>Admission checklist</h3>
          <p>Keep the essentials ready before you begin.</p>
          {["Academic marksheets/certificates","Valid identity document","Photographs and application details","Applicable entrance/admission documents"].map(x=><div className="check" key={x}><CheckCircle2 size={17}/>{x}</div>)}
          <Link className="btn btn-primary full" to="/admissions">View Admission Details</Link>
        </div>
      </div>
    </div>
  </section>;
}