import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sudoui from "../../Assets/Projects/sudoui.png";
import sudolib from "../../Assets/Projects/sudolib.png";
import chaupal from "../../Assets/Projects/chaupal.png";
import sudomart from "../../Assets/Projects/sudomart.png";
import sudoquiz from "../../Assets/Projects/sudoquiz.png";
import { DiReact } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
	SiTailwindcss,
	SiRedux,
	SiJavascript,
	SiCss3,
	SiFirebase,
	SiRazorpay,
} from "react-icons/si";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={chaupal}
							isBlog={false}
							title="Chaupal"
							description="A fully functional and responsive social media app that connects users and enables them to share their content on the web similar to what Twitter does."
							ghLink="https://github.com/jeetsdev/chaupal"
							demoLink="https://chaupal-jeetsdev.netlify.app/"
							icons={[
								<DiReact />,
								<SiRedux />,
								<SiTailwindcss />,
							]}
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sudomart}
							isBlog={false}
							title="SudoMart"
							description="An e-commerce platform built by developers for developers and techies."
							ghLink="https://github.com/jeetsdev/sudomart-react"
							demoLink="https://sudo-mart.netlify.app/"
							icons={[<DiReact />, <SiRazorpay />]}
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sudolib}
							isBlog={false}
							title="Sudo-Lib"
							description="A full stack web app to explore Linux tutorials, Customization and Linux distribution videos with various functionalities."
							ghLink="https://github.com/jeetsdev/sudo-lib"
							demoLink="https://sudo-lib.netlify.app/"
							icons={[<DiReact />]}
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sudoui}
							isBlog={false}
							title="Sudo UI"
							description="An open source CSS Component Library with predefined components to design your dream project better and faster."
							ghLink="https://github.com/jeetsdev/Sudo-UI"
							demoLink="https://sudo-ui.netlify.app/"
							icons={[
								<AiFillHtml5 />,
								<SiCss3 />,
								<SiJavascript />,
							]}
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={sudoquiz}
							isBlog={false}
							title="Sudo Quiz"
							description="Sudo Quiz is an online quiz platform to play quizzes."
							ghLink="https://github.com/jeetsdev/sudo-quiz-react"
							demoLink="https://sudo-quiz.netlify.app/"
							icons={[<DiReact />, <SiFirebase />]}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
