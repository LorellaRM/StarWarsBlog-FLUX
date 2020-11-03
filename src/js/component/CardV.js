import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function CardVehicle(props) {
	return (
		<Card style={{ width: "25rem" }}>
			<Card.Img
				variant="top"
				src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.model}</Card.Text>
				<Card.Text>{props.manufacturer}</Card.Text>
				<Card.Text>{props.cost}</Card.Text>
				<Card.Text>{props.passengers}</Card.Text>
				<Card.Text>{props.length}</Card.Text>

				<Button variant="primary" href={props.linkButton1}>
					{props.button1}
				</Button>
				<Button variant="primary" href={props.linkBtnFav}>
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
}

CardVehicle.propTypes = {
	title: PropTypes.string,
	model: PropTypes.string,
	manufacturer: PropTypes.string,
	cost: PropTypes.string,
	passengers: PropTypes.string,
	length: PropTypes.string,
	linkButton1: PropTypes.link,
	linkBtnFav: PropTypes.link,
	button1: PropTypes.string,
	image: PropTypes.string
};
