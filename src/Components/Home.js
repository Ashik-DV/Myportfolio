import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import "./Home.css"; 
import pic1 from "./pic1.jpg";  // ✅ Imported Image

export default function Home() {
    return (
        <div className="home-container">
            {/* Navbar */}
            <Navbar expand="lg" className="custom-navbar">
                <Container fluid>
                    <Nav className="me-auto navbar-links">
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/skill" className="nav-link">Skills</Nav.Link>
                        <Nav.Link as={Link} to="/education" className="nav-link">Education</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/* Main Content */}
            <section className="main-container">
                <div className="content">
                    <h1>Hello, I'm <span>Ashik Kumar DV</span></h1>
                    <h2 className="typewriter">Web Developer | Engineer | Innovator</h2>
                    <p>Passionate about creating impactful digital experiences and solving real-world problems.</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/ashik-kumar-d-v-21826425a" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/ashik_rpt/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                    <button><a href="resumevtu.pdf">Download Resume</a></button>
                </div>
                
                <div className="image">
                    <img src={pic1} alt="Profile" />
                </div>
            </section>
        </div>
    );
}
