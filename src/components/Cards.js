import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className='cards'>
			<h1>Check out our services!</h1>
			<div className='cards__container'>
				<div className='cards__wrapper'>
					<ul className='cards__items'>
						<CardItem
							src={require("../images/trainer.jpg").default}
							text='Personal Training'
							label='Trainrz'
							path='/services'
						/>
						<CardItem
							src={require("../images/fruit.jpg").default}
							text='Nutrition Counseling'
							label='Consultations'
							path='/services'
						/>
						<CardItem
							src={require("../images/facility.jpg").default}
							text='Facility'
							label='Amenities'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
