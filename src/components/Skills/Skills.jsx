import "./Skills.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap,FaGithub  } from "react-icons/fa";
import { SiTailwindcss, SiMongodb ,SiExpress,SiTypescript  } from "react-icons/si";
import ankita from '../../Assets/ankita.png'

const Skills = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    const skills = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaBootstrap />, name: "Bootstrap" },   
        { icon: <SiExpress />, name: "Express" },
        // { icon: <SiTypescript />, name: "Type Script"},
        // { icon: <FaGithub />, name: "Github"}
        
    ];

    return (
        <div className="Skills" ref={ref}>
            <div className="about">         
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Introduction</motion.b>
                    </h1>
                </div>
                <div className="about1">
                    <img src={ankita} alt="Profile" />
                     <p>
                     "Hello, I'm Ankita Srivastava. I recently graduated with a BSc in Computer Applications from Mahatma Gandhi PG College in Gorakhpur. I have a strong technical background, particularly in frontend development. My skills include HTML, CSS, JavaScript, C++, React.js, Tailwind CSS, and Bootstrap. I'm passionate about web development and problem-solving, and I thrive on creating efficient, user-friendly interfaces. I'm excited to bring my expertise and enthusiasm to a dynamic team where I can contribute and grow further."
    </p>
                </div>     
            </div>
            <div className="progress">
                <h1>My Tech Skills</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
                <div className="skillsGrid">
                    {skills.map((skill, index) => (
                        <div key={index} className="skillItem">
                            {skill.icon}
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
