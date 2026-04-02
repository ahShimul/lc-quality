import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Breadcrumb } from "../components/sections/Breadcrumb";
import { TrustStrip } from "../components/sections/TrustStrip";
import { useFadeIn } from "../hooks/useFadeIn";

const trustChips = [
    { icon: "bolt", text: "Fast response", highlight: true },
    { icon: "file-signature", text: "Free written estimate" },
    { icon: "user", text: "No subcontractors" },
    { icon: "shield-halved", text: "Licensed & insured" },
    { icon: "star", text: "5-star rated" },
];

const areas = ["📍 Centereach", "Selden", "Smithtown", "Hauppauge", "Commack", "Stony Brook", "Ronkonkoma", "Lake Grove", "Coram"];

export function ContactPage() {
    const fadeRef = useFadeIn();

    return (
        <div ref={fadeRef}>
            <Helmet>
                <title>Contact LC Quality Improvements | Free Estimate</title>
                <meta name="description" content="Contact LC Quality Improvements for a free written estimate on Long Island. Call, text, or send details through the form." />
            </Helmet>

            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Contact" }]} />

            {/* Hero */}
            <section className="py-[4.2rem] px-[6%]" style={{ background: "radial-gradient(600px 300px at 20% 20%, rgba(0,176,255,0.14), transparent 70%), radial-gradient(600px 300px at 70% 30%, rgba(21,101,192,0.18), transparent 70%), linear-gradient(180deg, rgba(10,26,53,0.88), rgba(5,16,31,0.98))" }}>
                <div className="max-w-[820px] fi">
                    <div className="inline-flex items-center gap-2 bg-[rgba(0,176,255,0.1)] border border-[rgba(0,176,255,0.3)] px-4 py-[0.38rem] rounded-full text-[0.78rem] text-ice font-extrabold tracking-wider mb-5">
                        <i className="fas fa-clipboard-check" /> Free written estimates • Owner-operated
                    </div>
                    <h1 className="text-[clamp(2rem,4.6vw,3.3rem)] font-black leading-[1.08] tracking-[-1.5px] text-white mb-4">
                        Contact LC Quality Improvements
                    </h1>
                    <p className="text-muted text-[1.02rem] leading-[1.78] max-w-[680px]">
                        Call or text for the fastest response, or send your project details through the form and I'll get back to you with next steps.
                    </p>
                    <div className="flex gap-[0.85rem] flex-wrap mt-6">
                        <a href="tel:6311112222" className="btn-grad"><i className="fas fa-phone" /> Call 631-111-2222</a>
                        <a href="sms:6311112222" className="btn-ghost"><i className="fas fa-comment" /> Text Us</a>
                    </div>
                </div>
            </section>

            <TrustStrip chips={trustChips} />

            {/* Contact */}
            <section className="py-[4.5rem] px-[6%] bg-navy">
                <div className="max-w-[1160px] mx-auto">
                    <div className="grid grid-cols-[1.15fr_0.85fr] gap-8 items-start max-[920px]:grid-cols-1">
                        {/* Form card */}
                        <div className="bg-[rgba(255,255,255,0.04)] border border-gline rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.45)] fi">
                            <div className="p-6">
                                <h2 className="text-[1.35rem] font-black text-white tracking-[-0.6px] mb-2">Request a Free Estimate</h2>
                                <p className="text-muted text-[0.88rem] leading-[1.75]">Fill this out and I'll respond with questions (if needed) and schedule options.</p>
                                <EstimateForm />
                            </div>
                        </div>

                        {/* Right rail */}
                        <div className="grid gap-4 fi">
                            <div className="bg-[rgba(255,255,255,0.04)] border border-gline rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]">
                                <div className="p-6">
                                    <h2 className="text-[1.35rem] font-black text-white tracking-[-0.6px] mb-2">Call, Text, or Email</h2>
                                    <p className="text-muted text-[0.88rem] leading-[1.75]">For the fastest quote scheduling, call or text.</p>
                                    <div className="grid gap-2 mt-3">
                                        {[{ href: "tel:6311112222", icon: "phone", label: "Phone:", value: "631-111-2222" }, { href: "sms:6311112222", icon: "comment", label: "Text:", value: "631-111-2222" }, { href: "mailto:info@lcqualityimprovements.com", icon: "envelope", label: "Email:", value: "info@lcqualityimprovements.com" }].map((c) => (
                                            <a key={c.icon} href={c.href} className="flex gap-[0.6rem] items-start text-text text-[0.88rem] leading-[1.55]">
                                                <i className={`fas fa-${c.icon} text-ice mt-[0.15rem]`} />
                                                <div><strong>{c.label}</strong>&nbsp;{c.value}</div>
                                            </a>
                                        ))}
                                        <div className="flex gap-[0.6rem] items-start text-text text-[0.88rem] leading-[1.55]">
                                            <i className="fas fa-location-dot text-ice mt-[0.15rem]" />
                                            <div><strong>Based in:</strong>&nbsp;Centereach, NY 11720</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {["Owner-operated", "Licensed", "Insured", "Written estimates"].map((p) => (
                                            <span key={p} className="text-[0.75rem] font-extrabold text-white/80 px-[0.7rem] py-1 rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)]">{p}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[rgba(5,16,31,0.65)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-5">
                                <h3 className="text-[0.95rem] font-black text-white mb-2">Service Area</h3>
                                <p className="text-muted text-[0.88rem]">We serve all of Nassau & Suffolk County (Long Island).</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {areas.map((a) => (
                                        <span key={a} className="text-[0.75rem] font-extrabold text-white/80 px-[0.7rem] py-1 rounded-full border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.05)]">{a}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[rgba(5,16,31,0.65)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-5">
                                <h3 className="text-[0.95rem] font-black text-white mb-2">Find Us</h3>
                                <div className="rounded-[18px] overflow-hidden border border-[rgba(255,255,255,0.14)]">
                                    <iframe loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Centereach%20NY%2011720&output=embed" className="w-full h-[290px] border-0 block" style={{ filter: "saturate(1.1) contrast(1.05)" }} title="Google Map" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expectations */}
            <section className="py-[4.5rem] px-[6%] bg-navy2 border-t border-gline border-b">
                <div className="max-w-[1160px] mx-auto">
                    <div className="grid grid-cols-2 gap-5 max-[860px]:grid-cols-1 fi">
                        <div className="bg-[rgba(255,255,255,0.04)] border border-gline rounded-[18px] p-5">
                            <h3 className="flex gap-2 items-center text-base font-black text-white mb-2"><i className="fas fa-list-check text-ice" /> What to include</h3>
                            <ul className="list-none grid gap-[0.45rem] mt-3">
                                {["Your town + ZIP code", "What service you need", "Photos (text/email is fine)", "Your ideal start date"].map((item) => (
                                    <li key={item} className="text-[0.86rem] text-text leading-[1.6] flex gap-2 items-start"><i className="fas fa-check text-muted mt-1" /> {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.04)] border border-gline rounded-[18px] p-5">
                            <h3 className="flex gap-2 items-center text-base font-black text-white mb-2"><i className="fas fa-circle-info text-ice" /> What happens next</h3>
                            <ul className="list-none grid gap-[0.45rem] mt-3">
                                {["I reply with any quick questions", "We schedule a quick site visit (if needed)", "You receive a written estimate with a clear scope", "If you approve, we lock in dates"].map((item) => (
                                    <li key={item} className="text-[0.86rem] text-text leading-[1.6] flex gap-2 items-start"><i className="fas fa-arrow-right text-muted mt-1" /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function EstimateForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            (e.target as HTMLFormElement).reset();
        }, 3000);
    };

    const inputClass = "w-full bg-[rgba(5,16,31,0.72)] border border-[rgba(255,255,255,0.14)] text-text rounded-xl px-[0.85rem] py-3 text-[0.92rem] outline-none transition-all focus:border-[rgba(0,176,255,0.5)] focus:shadow-[0_0_0_4px_rgba(0,176,255,0.12)]";

    return (
        <form onSubmit={handleSubmit} className="mt-5 grid gap-[0.85rem]">
            <div className="grid grid-cols-2 gap-[0.85rem] max-[640px]:grid-cols-1">
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Name <span className="text-ice font-black">*</span></label>
                    <input type="text" name="name" required placeholder="Your name" autoComplete="name" className={inputClass} />
                </div>
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Phone <span className="text-ice font-black">*</span></label>
                    <input type="tel" name="phone" required placeholder="(631) 555-1234" autoComplete="tel" className={inputClass} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[0.85rem] max-[640px]:grid-cols-1">
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Email</label>
                    <input type="email" name="email" placeholder="you@email.com" autoComplete="email" className={inputClass} />
                </div>
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">ZIP code <span className="text-ice font-black">*</span></label>
                    <input name="zip" inputMode="numeric" required placeholder="11720" className={inputClass} />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[0.85rem] max-[640px]:grid-cols-1">
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Service <span className="text-ice font-black">*</span></label>
                    <select name="service" required className={inputClass}>
                        <option value="" disabled selected>Select a service</option>
                        <option>Kitchen Remodeling</option>
                        <option>Bathroom Renovation</option>
                        <option>Basement Remodeling</option>
                        <option>Interior & Exterior Painting</option>
                        <option>Flooring Installation</option>
                        <option>Doors & Windows</option>
                        <option>Electrical Work</option>
                        <option>Deck Building</option>
                        <option>Roofing</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Timeline</label>
                    <select name="timeline" className={inputClass}>
                        <option value="" disabled selected>Choose (optional)</option>
                        <option>ASAP</option>
                        <option>1–2 weeks</option>
                        <option>3–6 weeks</option>
                        <option>2–3 months</option>
                        <option>Just planning</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="block text-[0.78rem] font-extrabold text-white/85 mb-1 tracking-wider">Project details <span className="text-ice font-black">*</span></label>
                <textarea name="details" required placeholder="Tell me what you want done, approximate room sizes, materials you already purchased (if any), and any issues." className={`${inputClass} min-h-[120px] resize-y`} />
                <div className="text-[0.78rem] text-muted leading-[1.6]">Tip: If you have photos, mention it here and I'll tell you where to text/email them.</div>
            </div>
            <div className="flex gap-[0.85rem] items-center flex-wrap mt-1">
                <button type="submit" className={`btn-grad ${submitted ? "!bg-gradient-to-br !from-[#00C853] !to-[#00E676]" : ""}`}>
                    {submitted ? <><i className="fas fa-check" /> Sent!</> : <><i className="fas fa-paper-plane" /> Get My Free Estimate</>}
                </button>
                <span className="text-[0.75rem] text-white/70"><i className="fas fa-clock" /> Typical response: within 24 hours</span>
            </div>
        </form>
    );
}
