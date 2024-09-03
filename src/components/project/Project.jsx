import "./project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import indigle from '../../Assets/indigle2.png'
import booking from '../../Assets/booking-easy.png'
import Iliff from '../../Assets/Iliff.png'

const item = [
    {
        id: 1,
        title: "Indigle",
        img: indigle,
        desc: "Spearheaded end-to-end development of a dynamic social media web app using the MERN stack. Integrated MongoDB, Express.js, React.js, and Node.js for robust functionality. Delivered features including post management (upload and delete), like/dislike functionality, follow/unfollow capabilities, and a real-time chat system.",
        link: "https://indigle.onrender.com"
    },

    {
        id: 2,
        title: "Booking-Easy",
        img: booking,
        desc:"This platform allows users to book event-related services like banquets, photographers, caterers, etc., all in one place. Currently, only the banquet section is completed, and the payment gateway is yet to be deployed. The platform is designed to enable dynamic changes for other vendors, as mentioned during the interview",
        link: "https://make-booking-easy.onrender.com/"
    },

    {
        id: 3,
        title: "Iliff School of Theology",
        img: Iliff,
        desc:"This is a full-featured website that I created with a team as a freelancer for a US client. My role involved both frontend and backend development, primarily focusing on handling APIs, creating responsive interfaces, and integrating various backend services to ensure seamless functionality",
        link: "https://www.iliff.edu/"
    }
];


const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, 
        //offset:["start start","end start"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300,300])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="demoButton">
                            See Demo
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Project = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="project" ref={ref}>
            <div className="progress">
                <h1>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {item.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Project
