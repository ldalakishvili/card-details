import React, { useState } from "react";
import styled from "styled-components";
import Path from "../../assets/Path.png";
export default function Complete() {
	return (
		<Success>
			<Oval src={Path} />
			<Thank> THANK YOU!</Thank>
			<Text>We’ve added your card details</Text>
			<ContinueBtn> Continue</ContinueBtn>
		</Success>
	);
}

const Success = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 38.1rem;
	@media (max-width: 600px) {
		width: 32.7rem;
	}
`;
const Oval = styled.img`
	background-image: linear-gradient(163.95deg, #6348fe 4.74%, #610595 88.83%);
	padding: 3.2rem 2.8rem;
	width: 8rem;
	height: 8rem;
	margin-bottom: 3.5rem;
	border-radius: 50%;
`;
const Thank = styled.h1`
	font-size: 28px;
	line-height: 36px;
	letter-spacing: 3.422222137451172px;
	text-align: center;
	color: #21092f;
`;
const Text = styled.p`
	font-size: 18px;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: center;
	color: #8f8694;
	margin: 1.6rem 0 4.8rem;
`;
const ContinueBtn = styled.button`
	margin-top: 1.4rem;
	padding: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #21092f;
	color: #ffffff;
	font-size: 18px;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: center;
	border: none;
	border-radius: 0.8rem;
`;
