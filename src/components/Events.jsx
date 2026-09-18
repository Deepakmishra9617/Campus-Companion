import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import React from "react";
const events = [
 ["01","Campus Innovation Day","18 OCT","TIT Campus","Showcase student ideas, prototypes and technology projects."],
 ["02","CodeSprint Challenge","02 NOV","Innovation Lab","A coding challenge focused on problem solving and teamwork."],
 ["03","Industry Connect Series","16 NOV","Seminar Hall","A student-focused session around careers and emerging technologies."]
];

export default function Events() {
 return <section className="section" id="events"><div className="container"><SectionTitle eyebrow="UPCOMING EVENTS" title="Something is always happening." text="Demo events for the prototype. Replace dates and details with official TIT announcements."/><div className="event-grid">{events.map(([n,t,date,loc,d])=><article className="event-card" key={t}><div className="event-date"><span>{date.split(" ")[1]}</span><b>{date.split(" ")[0]}</b></div><div><small>EVENT {n}</small><h3>{t}</h3><div className="event-meta"><span><MapPin size={15}/>{loc}</span><span><CalendarDays size={15}/>{date}</span></div><p>{d}</p><button className="event-link">View Event <ArrowRight size={15}/></button></div></article>)}</div></div></section>;
}