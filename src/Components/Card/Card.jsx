import React, { useState } from "react";
import styled from "styled-components";
import cardImg from "../../assets/img.png";
export default function Card(props) {
	return (
		<CardWrapper>
			<CardContainer>
				<CardNumber>
					{props.number ? props.number : "0000 0000 0000 0000"}{" "}
				</CardNumber>
				<CardInfo>
					<CardName>{props.holder ? props.holder : "JANE APPLESEED"} </CardName>
					<CardDate>
						{props.month ? props.month : "00"}/ {props.year ? props.year : "00"}
					</CardDate>
				</CardInfo>
			</CardContainer>
			<CardBack>
				<Line />
				<CvcHolder>{props.cvc ? props.cvc : "000"}</CvcHolder>
				<CardImage src={cardImg}></CardImage>
			</CardBack>
		</CardWrapper>
	);
}
const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 3.7rem;

	@media (max-width: 600px) {
		position: relative;
	}
`;

const CardContainer = styled.div`
	width: 44.7rem;
	height: 23.3rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 2.65rem 3.2rem;
	background-image: linear-gradient( #6348FE 5.74%, #610595 88.83%);

	);
    border-radius:0.8rem;
    gap:2.5rem;
    @media (max-width: 600px) {
		position: absolute;
        top:12.6rem;
        width:28.5rem;
        height:15.6rem;
        padding:1.9rem;
        z-index:2;

	}
`;
const CardNumber = styled.p`
	font-size: 28px;
	line-height: 36px;
	letter-spacing: 3.422222137451172px;
	text-align: left;
	color: white;

	@media (max-width: 600px) {
		font-size: 18px;
		line-height: 22px;
	}
`;
const CardInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
const CardName = styled.p`
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 2px;
	text-align: left;
	color: white;
	text-transform: uppercase;
	@media (max-width: 600px) {
		font-size: 9px;
		line-height: 12px;
	}
`;
const CardDate = styled.p`
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 2px;
	text-align: left;
	color: white;
	@media (max-width: 600px) {
		font-size: 9px;
		line-height: 12px;
	}
`;

const CardBack = styled.div`
	margin-left: 9.4rem;
	width: 44.7rem;
	padding: 2.3rem 0 4.7rem;
	align-items: center;
	justify-content: center;
	background-color: #d2d3d9;
	border-radius: 0.8rem;
	@media (max-width: 600px) {
		position: absolute;
		top: 3.2rem;
		width: 28.5rem;
		height: 15.6rem;
		margin-left: 5.4rem;
	}
`;
const Line = styled.div`
	background-color: #2f2f2f;
	width: 100%;
	height: 5.4rem;
	@media (max-width: 600px) {
		height: 3.4rem;
	}
`;
const CvcHolder = styled.div`
	margin: 2.4rem 4.1rem 3.3rem 4.5rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem 1.6rem;
	background-color: #adb5be;
	border-radius: 0.8rem;
	color: white;
	font-size: 14px;
	line-height: 18px;
	letter-spacing: 2px;
	text-align: right;

	@media (max-width: 600px) {
		height: 3.4rem;
		margin: 1.4rem 2.6rem 0 2.6rem;
	}
`;
const CardImage = styled.img`
	width: 186px;
	height: 26px;
	margin: 0 12.9rem;

	@media (max-width: 600px) {
		width: 0;
	}
`;
