import React from "react";

export default function TechnicalSkills() {
  const skills = [
    "Elastic SIEM",
    "Threat Detection",
    "Log Analysis",
    "Incident Response",
    "Network Security",
    "Bash Automation",
  ];

  return (
    <section id="skills" className="py-24 relative">
      <h2 className="text-4xl text-cyan-400 mb-20 text-center">
        Technical Skills
      </h2>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-400/30 h-full" />

        {skills.map((skill, index) => {
          const alignLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-16 flex ${
                alignLeft ? "justify-start" : "justify-end"
              } relative`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black shadow-[0_0_15px_#00ffff]" />

              <div className="w-5/12 bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400 shadow-lg transition">
                <h3 className="text-cyan-400 font-semibold text-lg mb-2">
                  {skill}
                </h3>
                <p className="text-slate-400 text-sm">
                  Practical hands-on experience implementing and monitoring this
                  skill in SOC environments.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}