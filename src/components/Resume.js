import TitleBar from "./TitleBar";
import SideBar from "./SideBar";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
export default function Resume() {
    return (
        <div className="resume">
            <TitleBar />
            <div className="content-container">
                <SideBar />
                <div className="main-content">
                    <WorkExperience />
                    <Projects />
                </div>
            </div>
        </div>
    );
};