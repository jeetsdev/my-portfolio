import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
	console.log("props: ", props);
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ marginBottom: "auto" }}>
					<Card.Title className="purple">{props.title}</Card.Title>
					<Card.Text style={{ textAlign: "justify" }}>
						{props.description}
					</Card.Text>
				</div>
				<div
					className="purple"
					style={{
						fontSize: "1.5rem",
						display: "flex",
						gap: ".5rem",
						margin: ".5rem 0",
					}}
				>
					{props?.icons?.map((icon) => {
						console.log("icon: ", icon);
						return <span key={Math.random()}>{icon}</span>;
					})}
				</div>
				<div style={{ marginTop: "2rem" }}>
					<Button
						variant="primary"
						href={props.demoLink}
						target="_blank"
						style={{ marginRight: "10px" }}
					>
						<CgWebsite /> &nbsp;
						{"Demo"}
					</Button>
					<Button
						variant="secondary"
						href={props.ghLink}
						target="_blank"
					>
						<BsGithub /> &nbsp;
						{props.isBlog ? "Blog" : "GitHub"}
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
