import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Sidebar />

            <div className="wrapper">
                <motion.span className="logo"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    My-portfolio
                </motion.span>

                <motion.div
                    className="social"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <SocialIcon style={{ cursor: "pointer", width: "2.5rem", height: "2.5rem" }} network="github" url="https://github.com/AnkitaSri120103" />
                    <SocialIcon style={{ cursor: "pointer", width: "2.5rem", height: "2.5rem" }} network="linkedin" url="https://www.linkedin.com/in/ankita-srivastava-081899318/" />
                    <SocialIcon style={{ cursor: "pointer", width: "2.5rem", height: "2.5rem" }} network="email" url="https://www.linkedin.com/in/ankita-srivastava-081899318/" />

                </motion.div>
            </div>
        </div>
    );
}

export default Navbar;
