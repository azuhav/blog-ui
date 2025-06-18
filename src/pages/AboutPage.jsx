import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import resumePDF from "../assets/resume.pdf";

function AboutPage() {
  return (
    <div className="about-page-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p className="tagline">
          Passionate about software development, electronic engineering, and
          exploring new gadgets.
        </p>
        <div className="social-links">
          <a
            href="https://twitter.com/azuhav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://linkedin.com/in/ykuznetsov"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <a href={resumePDF} download className="resume-button">
          Download My Resume
        </a>
      </header>

      <section className="about-bio">
        <h2>My Story</h2>
        <p>
          Hello! My name is Yury Kuznetsov, and I'm the creator of this website.
          My journey into the world of technology began with a fascination for
          how things work, leading me to explore both the intricate logic of
          software and the tangible magic of electronics.
        </p>
        <p>
          Over the years, I've had the opportunity to work on various projects,
          from developing web applications and mobile apps to tinkering with
          microcontrollers and designing electronic circuits. This diverse
          experience has fueled my passion for understanding the
          interconnectedness of these fields and the exciting possibilities that
          emerge at their intersection.
        </p>
        <p>
          This platform is a space for me to share my learnings, insights, and
          explorations in software development and testing, electronic
          engineering, and the ever-evolving landscape of emerging gadgets.
          Whether you're a fellow enthusiast, a curious beginner, or someone
          looking for practical knowledge, I hope you find something valuable
          here.
        </p>
      </section>

      <section className="about-interests">
        <h2>Areas of Interest</h2>
        <ul>
          <li>Testing and QA (Web, Mobile) </li>
          <li>Web Development (React, Node.js, etc.)</li>
          <li>Mobile App Development (Android, iOS)</li>
          <li>Embedded Systems and Microcontrollers (Arduino, Raspberry Pi)</li>
          <li>Digital and Analog Circuit Design</li>
          <li>Internet of Things (IoT)</li>
          <li>Artificial Intelligence and Machine Learning (basics)</li>
          <li>The Latest Tech Gadgets and Trends</li>
        </ul>
      </section>

      <section className="about-contact">
        <h2>Connect with Me</h2>
        <p>
          I'm always open to connecting with fellow tech enthusiasts and
          engaging in interesting discussions. Feel free to reach out through
          the social links above.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
