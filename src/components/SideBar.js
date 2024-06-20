export default function SideBar() {
    return (
        <div className="sidebar-container">
            <div className="contact-container side-section">
                <div className="contact-title-container">
                    <h3>Contact</h3>
                </div>
                <div className="email-container">
                    <p>elliewright055@gmail.com</p>
                </div>
                <div className="phone-number-container">
                    <p>(502) 541-5828</p>
                </div>
                <div className="location-container">
                    <p>Saint Joseph, MO</p>
                </div>
                <div className="links-container">
                    <div className="linkedin-container">
                        <a href="https://www.linkedin.com/in/ellewri/">LinkedIn</a>
                    </div>
                    <div className="github-container">
                        <a href="https://github.com/ellewright">Github</a>
                    </div>
                </div>
            </div>
            <div className="education-container side-section">
                <div className="education-title-container">
                    <h3>Education</h3>
                </div>
                <div className="grad-level-container">
                    <p>Bachelor of Arts</p>
                </div>
                <div className="field-container">
                    <p>Psychology</p>
                </div>
                <div className="dates-container">
                    <p>August 2018 - May 2022</p>
                </div>
                <div className="school-container">
                    <p><a href="https://www.bellarmine.edu/">Bellarmine University</a></p>
                </div>
                <div className="education-location-container">
                    <p>Louisville, KY</p>
                </div>
            </div>
            <div className="skills-container side-section">
                <div className="skills-title-container">
                    <h3>Skills</h3>
                </div>
                <div className="skills-list-container">
                    <ul className="skills-list">
                        <li>HTML/CSS,</li>
                        <li>JavaScript (ReactJS),</li>
                        <li>SQL (MySQL),</li>
                        <li>Python (Django),</li>
                        <li>Golang,</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}