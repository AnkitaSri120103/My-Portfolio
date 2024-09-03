
import { motion, } from "framer-motion"
import { useState } from "react"
const Test = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        visible:(i)=>( {
            opacity: 1, x: 100,
            //transition: { type: "spring", stiffness: 200, damping: 100 }
            transition:{delay:i*0.3}
        }),
        hidden: { opacity: 0 }
    }

    const items = [
        "items1", "items2", "3", "items4"
    ]

//     <motion.div className="titleContainer" variants={variants}>
//     <div className="title">
//         {/* <img src="/people.webp" alt="" /> */}
//         <h1>
//             <motion.b whileHover={{ color: "orange" }}>MERN Stack Developer</motion.b>
//         </h1>
//     </div>
// </motion.div>
// <motion.div className="textContainer" variants={variants}>
// <p>I am currently pursuing a B.Tech in Information Technology in my 3rd year at MMMUT (Gorakhpur).I am Specilist at Codeforces I have a strong technical background with extensive experience in the MERN stack, including MongoDB, Express.js, React.js, and Node.js. Additionally, I am proficient in core concepts like HTML/CSS, JavaScript, Tailwind, Redux, Firebase, Git, and have a deep understanding of data structures. My passion for web development and problem-solving has driven me to work on various impactful projects. I am proud to share that my project has been shortlisted among the Top 400 teams for the India regional solution challenge organized by Google Developer Student Club in the global hackathon 2024.</p>
// <hr/>
// </motion.div>


    return (
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((items,i) => (
                    <motion.li variants={variants} key={items} custom={i}>items</motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default Test
