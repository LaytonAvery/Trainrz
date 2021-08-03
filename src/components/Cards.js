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
							src='images/img-5.jpg'
							text='Personal Training'
							label='training'
							path='/services'
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
