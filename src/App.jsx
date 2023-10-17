import { useState } from "react";
import styled from "styled-components";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import "./reset.css";
import "./App.css";
import Complete from "./Components/Complete/Complete";

function App() {
	const [holder, setHolder] = useState(``);
	const [number, setNumber] = useState(``);
	const [month, setMonth] = useState(``);
	const [year, setyear] = useState(``);
	const [cvc, setCvc] = useState(``);

	const [confirm, setConfirm] = useState(false);
	return (
		<div className="main-container">
			<Card
				holder={holder}
				number={number}
				month={month}
				year={year}
				cvc={cvc}
			/>
			{!confirm ? (
				<Form
					holder={holder}
					setHolder={setHolder}
					number={number}
					setNumber={setNumber}
					setConfirm={setConfirm}
					month={month}
					setMonth={setMonth}
					year={year}
					setYear={setyear}
					cvc={cvc}
					setCvc={setCvc}
				/>
			) : (
				<Complete />
			)}
		</div>
	);
}

export default App;
