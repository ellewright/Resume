export default function Resume() {
    return (
        <div className="resume">
            <div className="title-container">
                <div className="name">
                    <h1>Ellie Wright</h1>
                </div>
                <div className="position">
                    <h2>Software Engineer</h2>
                </div>
            </div>
            <div className="main-content-container">
                <div className="sidebar-container">
                    <div className="contact-container">
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
                        <div className="linkedin-container">
                            <a href="https://www.linkedin.com/in/ellewri/">LinkedIn</a>
                        </div>
                    </div>
                    <div className="education-container">
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
                        <div className="education-location-container">
                            <p>Louisville, KY</p>
                        </div>
                    </div>
                    <div className="skills-container">
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
                <div className="main-content">
                    <div className="work-experience-container">
                        <div className="work-experience-title">
                            <h3>Work Experience</h3>
                        </div>
                        <div className="work-experience">
                            <ul>
                                <li>
                                    <h4>Cloth Roller</h4>
                                    <a href="https://thriftworld.com/">Thrift World</a>
                                    <p>March 2024 - Current / St. Joseph, MO</p>
                                    <ul className="job-skills-list">
                                        <li>Kept the storefront stocked at all times in order to deliver the best experience to the guest.</li>
                                        <li>Established positive rapport and hospitality with guests in order to ensure satisfaction and future continued business.</li>
                                        <li>Organized thousands of items of clothing weekly.</li>
                                        <li>Properly trained new hires, ensuring quality work in colleagues.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="projects-title-container">
                            <h3>Projects</h3>
                        </div>
                        <div className="projects-list">
                            <ul>
                                <li>
                                    <h4><a href="https://github.com/ellewright/Final-Project">Personal Quiz</a></h4>
                                    <ul className="project-bullets">
                                        <li>Final project for the Foundational Software Development course through CourseCareers.</li>
                                        <li>Built with ReactJS and deployed using Vercel.</li>
                                        <li>Utilizes Tailwind CSS for styling.</li>
                                        <li>Validates multiple choice answers with front-end logic.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};