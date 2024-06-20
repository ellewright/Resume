export default function Projects() {
    return (
        <div className="projects-container main-section">
            <div className="projects-title-container">
                <h3>Projects</h3>
            </div>
            <div className="projects-list main-body">
                <ul>
                    <li className="project">
                        <h4><a href="https://github.com/ellewright/Final-Project">Personal Quiz</a></h4>
                        <ul className="bullets">
                            <li>Final project for the Foundational Software Development course through CourseCareers.</li>
                            <li>Built with ReactJS and deployed using Vercel.</li>
                            <li>Utilizes Tailwind CSS for styling.</li>
                            <li>Validates multiple choice answers with front-end logic.</li>
                        </ul>
                    </li>
                    <li className="project">
                        <h4><a href="https://github.com/ellewright/todo-list">To-Do List App</a></h4>
                        <ul className="bullets">
                            <li>Application which allows for creation, storage, and deletion of task items.</li>
                            <li>Built with ReactJS and deployed using Vercel.</li>
                        </ul>
                    </li>
                    <li className="project">
                        <h4><a href="https://github.com/ellewright/React-TicTacToe">Tic-Tac-Toe App</a></h4>
                        <ul className="bullets">
                            <li>Functional two-player tic-tac-toe game.</li>
                            <li>Built with ReactJS and deployed using Vercel.</li>
                            <li>Implemented functionality which allows for move callbacks and retries.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}