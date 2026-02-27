import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import TechnicalSkills from "./TechnicalSkills";

const roles = ["SOC Analyst", "Threat Hunter", "SIEM Engineer", "Cyber Defender"];

export default function Portfolio() {

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const canvasRef = useRef(null);

  /* Typing Animation */
  useEffect(() => {
    let i = 0;
    const currentRole = roles[roleIndex];
    const typing = setInterval(() => {
      setText(currentRole.slice(0, i + 1));
      i++;
      if (i === currentRole.length) {
        clearInterval(typing);
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [roleIndex]);

  /* Matrix Rain Background */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const letters = "01";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ffff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* Active Navbar + Back to Top */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Brute Force Attack Detection using Threshold Rule",
      desc: "Designed and implemented a threshold-based detection rule in Elastic SIEM to identify multiple failed login attempts from the same source IP.",
      link: "https://github.com/Rajinikanth123-beep/soc-analyst-l1-portfolio/tree/main/Project-1-Windows-Failed-Login/Project-2-Brute-Force-Detection",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705441/download_1_iqldpn.jpg"
    },
    {
      title: "Suspicious PowerShell Execution Detection",
      desc: "Created detection queries to monitor encoded and obfuscated PowerShell commands in Windows logs.",
      link: "https://github.com/Rajinikanth123-beep/soc-analyst-l1-portfolio/tree/main/Project-1-Windows-Failed-Login/Project-2-Brute-Force-Detection/Project-3-Suspicious-PowerShell",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705441/download_2_p52vwf.jpg"
    },
    {
      title: "Windows Failed Login Monitoring (Elastic SIEM)",
      desc: "Monitored Event ID 4625 logs to detect repeated authentication failures.",
      link: "https://github.com/Rajinikanth123-beep/soc-analyst-l1-portfolio/tree/main/Project-1-Windows-Failed-Login",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705441/download_3_rugoii.jpg"
    },
    {
      title: "Port Scan Detection using Elastic SIEM",
      desc: "Developed correlation rules to detect abnormal scanning behavior across multiple ports.",
      link: "https://github.com/Rajinikanth123-beep/soc-analyst-l1-portfolio/tree/main/Project-1-Windows-Failed-Login/Project-2-Brute-Force-Detection/Project-3-Suspicious-PowerShell/Project-4-Privilege-Escalation/Project-5-Port-Scan-Detection",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705442/download_4_zx2op8.jpg"
    },
    {
      title: "Single Target Network & Service Classification Engine (Bash)",
      desc: "Built a Bash automation tool to scan targets and classify open ports.",
      link: "https://github.com/Rajinikanth123-beep/Log-Analysis-Automation-Engine.git",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705441/download_5_ce438f.jpg"
    },
    {
      title: "Advanced End-to-End SOC Attack Simulation & Incident Response",
      desc: "Simulated real-world cyber attack scenarios, generated logs, created custom detection rules in Elastic SIEM, performed alert triage, investigation, and documented full incident response workflow.",
      link: "https://github.com/Rajinikanth123-beep/soc-analyst-l1-portfolio/tree/main/Project-1-Windows-Failed-Login/Project-2-Brute-Force-Detection/Project-3-Suspicious-PowerShell/Project-4-Privilege-Escalation/Project-5-Port-Scan-Detection/Advanced-End-to-End-Attack-Detection",
      image: "https://res.cloudinary.com/dllobgxw0/image/upload/v1771705850/download_6_vdxmk3.jpg"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth overflow-x-hidden">

      {/* Cyber Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Matrix Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-30" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-lg z-30 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-cyan-400 font-bold tracking-widest">MADAM RAJINIKANTH REDDY</h1>
          <div className="hidden md:flex gap-8 text-sm">
            {["home", "skills", "projects", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className={`capitalize ${activeSection === item ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Profile Image */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 gap-12">
        <div className="text-center md:text-left max-w-xl z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I'm <span className="text-cyan-400">Madam Rajinikanth Reddy</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 h-12">
            <span className="text-cyan-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-slate-400">
            SOC Analyst | SIEM Monitoring | Threat Detection | Log Analysis | Elastic Security
          </p>
          <a href="/resume.pdf" download="Rajinikanth.pdf" className="inline-block mt-6 px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-lg">
            Download Resume
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >

          {/* Neon Rotating Frame */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-cyan-400 shadow-[0_0_40px_#00ffff]"
          />

          {/* Radar Sweep */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full bg-gradient-to-tr from-cyan-400/20 to-transparent"
          />

          {/* Image Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-cyan-400/40 shadow-2xl shadow-cyan-500/30">

            {/* Dark Overlay Blend */}
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10" />

            {/* Glitch Effect */}
            <motion.img
              src="https://res.cloudinary.com/dllobgxw0/image/upload/v1771697441/download_epir9z.jpg"
              alt="Madam Rajinikanth Reddy"
              loading="lazy"
              className="w-full h-full object-cover"
              animate={{ x: [0, -2, 2, 0] }}
              transition={{ repeat: Infinity, duration: 0.3 }}
            />

            {/* Holographic Scan Line */}
            <motion.div
              animate={{ y: [-100, 100] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute w-full h-2 bg-cyan-400/40 blur-md"
            />
          </div>
        </motion.div>
      </section>

      <TechnicalSkills />

      {/* Projects */}
      <section id="projects" className="py-24 text-center">
        <h2 className="text-4xl text-cyan-400 mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project,i)=> (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-400 shadow-xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl text-cyan-400 mb-3">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition rounded-lg"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 text-center">
        <h2 className="text-4xl text-cyan-400 mb-10">Contact</h2>
        <div className="space-y-4 text-slate-300">
          <p><Mail size={18} className="inline mr-2"/> rajinikanthreddymadem@gmail.com</p>
          <p><Phone size={18} className="inline mr-2"/> +91 9392485881</p>
          <p><MapPin size={18} className="inline mr-2"/> Andhra Pradesh, India</p>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          <a href="https://github.com/Rajinikanth123-beep" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition"><Github size={28}/></a>
          <a href="https://www.linkedin.com/in/madam-rajinikanth-reddy-b49b63307" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition"><Linkedin size={28}/></a>
          <a href="https://www.instagram.com/rajinikanth256reddy?igsh=MW1xdHRwZ3hvcHU1Ng==" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition"><Instagram size={28}/></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-slate-500 border-t border-slate-800">
        © 2026 Madam Rajinikanth Reddy | SOC Analyst Portfolio
      </footer>
    </div>
  );
}