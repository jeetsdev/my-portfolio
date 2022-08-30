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
							description="A fully functional and responsive social media app that connects users and enables them to share their content on the web similar to what Twitter does. Here you can Post (CRUD functionalities), like a post, add it to the bookmark, and comment on it. You can also follow a user, check the profile of other users, and also you can update your profile."
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
							description="An e-commerce platform built by developers for developers and techies using React and my CSS component library, having features like Product listing, filtering products by price, category, rating, and Cart, Wishlist, Address Management, Payment gateway Integration, and Order summary."
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
							description="A full stack web app to explore Linux tutorials, Customization, and Linux distribution videos with various functionalities built using React, and Context API. Here you can watch a video, create a Playlist, add/remove it from playlists, add it to watch later, add/remove it from liked videos and you can explore your watch history."
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
							description="An open-source CSS Component Library with predefined components to design your dream project better and faster. I have used this component library in some of the projects above like SudoMart and Sudo-Lib."
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
							description="Sudo Quiz is an online quiz platform to play quizzes made using React, Context API, Firebase, HTML, and CSS. Implemented concepts like Points, Auth, and Toast Handling."
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
