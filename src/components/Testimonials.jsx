import { Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import React from "react";
const testimonials = [
 ["Aarav Sharma","CSE • 2026","TIT gave me a strong environment to learn development, collaborate with friends and participate in technical activities.","AS"],
 ["Priya Verma","CSE (AI & ML) • 2026","The project-based learning mindset helped me connect classroom concepts with practical AI and software work.","PV"],
 ["Rohan Patel","IT • 2025","The campus community pushed me to participate, communicate better and become more confident about my career.","RP"]
];

export default function Testimonials() {
 return <section className="section"><div className="container"><SectionTitle eyebrow="STUDENT VOICES" title="Stories from the community." text="Illustrative testimonials for the prototype. Replace with approved student/alumni testimonials." center/><div className="testimonial-grid">{testimonials.map(([n,c,t,i])=><article className="testimonial" key={n}><Quote size={24}/><p>“{t}”</p><div className="person"><span>{i}</span><div><b>{n}</b><small>{c}</small></div></div></article>)}</div></div></section>;
}