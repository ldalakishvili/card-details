import React, { useState } from "react";
import styled from "styled-components";
import ReactInputMask from "react-input-mask";
export default function Form(props) {
	const [holderError, setHolderError] = useState(``);
	const [numberError, setNumberError] = useState(``);
	const [monthError, setMonthError] = useState(``);
	const [yearError, setYearError] = useState(``);
	const [cvcError, setCvcError] = useState(``);

	const handleSubmit = (e) => {
		e.preventDefault();
		let hasError = false;
		if (!props.holder) {
			setHolderError(" Can't be empty");
			hasError = true;
		}
		if (props.number.length < 19) {
			setNumberError("Can't be less than 16");
			hasError = true;
		}
		if (!props.number) {
			setNumberError("Can't be empty");
			hasError = true;
		}
		if (props.month > 12) {
			setMonthError(`Invalid Number`);
			hasError = true;
		}
		if (!props.month || !props.year) {
			setMonthError(`Can't be blank`);
			hasError = true;
		}
		if (!props.cvc) {
			setCvcError("Can't be empty");
			hasError = true;
		}
		if (!hasError) {
			props.setConfirm(true);
		}
	};

	return (
		<FormContainer>
			<FormInputBox>
				<InputLabel>Cardholder Name</InputLabel>
				<FormInput
					type="text"
					id="holder"
					placeholder="e.g. Jane Appleseed"
					onChange={(e) => {
						props.setHolder(e.target.value);
						setHolderError(``);
					}}
				/>
				<Error>{holderError} </Error>
			</FormInputBox>
			<FormInputBox>
				<InputLabel>Card Number</InputLabel>
				<FormInput
					mask={"9999 9999 9999 9999"}
					maskChar={null}
					type="text"
					id="number"
					placeholder="e.g. 1234 5678 9123 0000"
					onChange={(e) => {
						props.setNumber(e.target.value);
						setNumberError(``);
					}}
				/>
				<Error>{numberError} </Error>
			</FormInputBox>
			<ForomInputLastBox>
				<FormInputBox>
					<InputLabel>Exp. Date (MM/YY)</InputLabel>
					<div style={{ display: "flex", gap: "1rem" }}>
						<FormInput
							mask={"99"}
							maskChar={null}
							type="text"
							id="month"
							placeholder="MM"
							onChange={(e) => {
								props.setMonth(e.target.value);
								setMonthError(``);
							}}
						/>

						<FormInput
							mask={"99"}
							maskChar={null}
							type="text"
							id="year"
							placeholder="YY"
							onChange={(e) => {
								props.setYear(e.target.value);
								setMonthError(``);
							}}
						/>
					</div>
					<Error>{monthError} </Error>
				</FormInputBox>
				<FormInputBox>
					<InputLabel>CVC</InputLabel>
					<FormInput
						mask={"999"}
						maskChar={null}
						type="text"
						id="cvc"
						placeholder="e.g. 123"
						onChange={(e) => {
							props.setCvc(e.target.value);
							setCvcError(``);
						}}
					/>
					<Error>{cvcError} </Error>
				</FormInputBox>
			</ForomInputLastBox>
			<FormSubmitBtn type="submit" onClick={handleSubmit}>
				Confirm
			</FormSubmitBtn>
		</FormContainer>
	);
}

const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 381px;
	align-items: center;
	justify-content: center;
	gap: 2.6rem;

	@media (max-width: 600px) {
		width: 32.7rem;
	}
`;

const FormInputBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.9rem;
`;
const ForomInputLastBox = styled.div`
	width: 100%;
	display: flex;
	gap: 2rem;
`;
const InputLabel = styled.label`
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 2px;
	text-align: left;
	color: #21092f;
`;
const FormInput = styled(ReactInputMask)`
	width: 100%;
	font-size: 18px;
	line-height: 23px;
	letter-spacing: 0px;
	text-align: left;
	padding: 1.1rem 1.6rem;
	border: solid 1px #dfdee0;
	border-radius: 0.8rem;
	color: #21092f;
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
const FormSubmitBtn = styled.button`
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
const Error = styled.p`
	font-size: 12px;
	line-height: 15px;
	letter-spacing: 0px;
	text-align: left;
	color: #ff5050;
`;
