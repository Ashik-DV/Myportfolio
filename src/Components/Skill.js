import React from "react";
import "./Skill.css"; // Importing stylish CSS

function Skill() {
    return (
        <div>
            <div className="section">
                <h2>Technical Skills</h2>
                <div className="skills">
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">React.js</div>
                    <div className="skill">Frontend Development</div>
                    <div className="skill">Python Programming</div>
                    <div className="skill">Data Structure and Algorithm in C</div>
                    <div className="skill">Java</div>
                    <div className="skill">Power BI</div>
                </div>
            </div>

            <div className="section">
                <h2>Soft Skills</h2>
                <div className="soft-skills">
                    <div className="soft-skill">Presentation</div>
                    <div className="soft-skill">Leadership</div>
                    <div className="soft-skill">Teamwork</div>
                </div>
            </div>
        </div>
    );
}

export default Skill;
