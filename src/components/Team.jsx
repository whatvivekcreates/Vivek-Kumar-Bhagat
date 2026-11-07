import { motion } from "framer-motion";
import "./Team.css";

const FRIENDS = [
  {
    name: "Santosh Kumar",
    img: "./santosh.jpg",
    role: "SDET | QA Engineer",
    link: "https://www.linkedin.com/in/santoshkrsah/",
    intro: `Full Stack QA Engineer. Passionate about testing, automation, and ensuring software quality.`
  },
  {
    name: "Prapti Mehta",
    img: "./prapti.jpg",
    role: "Frontend + UI Designer",
    link: "https://praptiwebsite.netlify.app",
    intro: `Crafting intelligent systems, decoding data, and solving real-world problems with purpose.`
  }
];


export function Team() {
  return (
    <section id="team" className="team-section">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="team-title"
      >
        My <span className="grad">Creative Companions</span>
      </motion.h2>

      <div className="team-grid">
        {FRIENDS.map((f, i) => (
          <motion.div
            key={i}
            className="team-card"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            >
            <img src={f.img} className="team-photo" />

            <div className="team-info">
                <h3 className="team-name">{f.name}</h3>
                <p className="team-role">{f.role}</p>
                <p className="team-intro">{f.intro}</p>

                <motion.a
                href={f.link}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="team-link"
                >
                Visit Profile →
                </motion.a>
            </div>
        </motion.div>

        ))}
      </div>
    </section>
  );
}
