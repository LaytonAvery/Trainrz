import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
	return (
		<div className='hero-container'>
			<h1>Wellness Awaits</h1>
			<p>What's stopping you from getting in the best shape of your life?</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					Let's Begin!
				</Button>
			</div>
		</div>
	);
}

export default Hero;
