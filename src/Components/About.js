import React from "react";
import "./About.css"; // Importing stylish CSS

function About() {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <p>
                Hello! I’m <strong>Ashik Kumar DV</strong>, an engineer passionate about building innovative solutions 
                and tackling real-world challenges. With a strong foundation in technology and problem-solving, I thrive 
                on designing, developing, and optimizing systems that make a difference.
            </p>

            <p>
                Beyond engineering, I have a keen interest in continuous learning and communication, ensuring that ideas 
                are not just created but also effectively shared. Whether it's coding, collaborating on projects, or 
                brainstorming new ideas, I always aim to bring creativity and efficiency to the table.
            </p>

            <p>
                When I’m not working, you’ll find me exploring new technologies, refining my communication skills, or 
                taking on exciting side projects. I believe that growth comes from pushing boundaries and learning 
                something new every day.
            </p>

            <button className="explore-button">Explore More 🚀</button>
        </div>
    );
}

export default About;
