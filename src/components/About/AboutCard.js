import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Ranjeet Singh </span>
						from{" "}
						<span className="purple"> Uttar Pradesh, India.</span>
						<br />
						My goal is to work with a team where I can use my skills
						to build products and meaningful experiences for users.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Watching Movies
						</li>
						<li className="about-activity">
							<ImPointRight /> Writting Tech Blogs
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing Games
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Strive to build things that make a difference!"{" "}
					</p>
					<footer className="blockquote-footer">Unknown</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
