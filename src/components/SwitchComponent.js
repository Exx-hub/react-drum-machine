import React from "react";
import Switch from "react-switch";

function SwitchComponent({ name, toggle, setOff, checked, setChecked, color }) {
	const handleChange = () => {
		setChecked(!checked);
		toggle();
		console.log("clicked");
	};
	return (
		<div className="switch">
			<label htmlFor="material-switch">
				<span>{name}</span>
				<Switch
					checked={checked}
					onChange={handleChange}
					disabled={setOff}
					onColor={color}
					onHandleColor="#123"
					handleDiameter={18}
					uncheckedIcon
					checkedIcon
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={18}
					width={40}
					className="react-switch"
					id="material-switch"
					borderRadius={0}
				/>
			</label>
		</div>
	);
}

export default SwitchComponent;
