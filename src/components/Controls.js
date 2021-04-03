import React, { useState } from "react";
import SwitchComponent from "./SwitchComponent";

function Controls({
	soundName,
	setSounds,
	sounds,
	bankOne,
	bankTwo,
	setSoundName,
	power,
	setPower,
	volume,
	setVolume,
}) {
	const [powerToggle, setPowerToggle] = useState(true);
	const [bankToggle, setBankToggle] = useState(true);

	const toggleBank = () => {
		if (sounds === bankOne) {
			setSounds(bankTwo);
			setSoundName("Smooth Piano Kit");
		} else {
			setSounds(bankOne);
			setSoundName("Heater Kit");
		}
	};

	const togglePower = () => {
		setPower(!power);
	};

	const handleVolume = (e) => {
		setVolume(e.target.value);
		setSoundName(`Volume: ${e.target.value}`);

		setTimeout(() => setSoundName(""), 200);
	};

	return (
		<div className="controls">
			<SwitchComponent
				checked={powerToggle}
				setChecked={setPowerToggle}
				color={"#000"}
				name={"Power"}
				toggle={togglePower}
				setSoundName={setSoundName}
			/>

			<input
				type="text"
				className="control-input"
				value={power ? soundName : ""}
				readOnly
			/>
			<div className="volume-control">
				<p>VOLUME CONTROL</p>
				<input
					type="range"
					min={0}
					max={100}
					value={volume}
					disabled={!power}
					onChange={handleVolume}
				/>
			</div>

			<SwitchComponent
				checked={bankToggle}
				setChecked={setBankToggle}
				color={"#888"}
				name={"Bank"}
				toggle={toggleBank}
				setSoundName={setSoundName}
				setOff={!power}
			/>
		</div>
	);
}

export default Controls;
