import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'> Join Today </p>
				<p className='footer-subsciption-text'>
					Take a step towards better health!
				</p>
				<div className='input-areas'>
					<form>
						<input
							type='email'
							name='email'
							placeholder='Enter Your Email'
							className='footer-input'
						></input>
						<Button buttonStyle='btn--outline'>Contact Us</Button>
					</form>
				</div>
				<small> Trainrz © 2021</small>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/services'>Meet Our Trainrz</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Your New Home</h2>
						<Link to='/facility'>Membership Features</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
