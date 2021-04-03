import React, { useEffect, useState } from "react";

function Drumpad({ sounds, soundName, setSoundName, power, volume }) {
	const [keyPressed, setKeyPressed] = useState(null);

	// JS functions to make buttons flicker when pressed
	const activeStyle = (target) => {
		if (target) {
			target.style.backgroundColor = "#ffb303";
			target.style.marginTop = "2px";
			target.style.boxShadow = "0 3px #545454";
		}
	};

	const disableStyle = (target) => {
		if (target) {
			target.style.backgroundColor = "#e6e3e3";
			target.style.marginTop = "0";
			target.style.boxShadow = "2px 2px 3px black";
		}
	};

	// Function to still be pressable when power is off
	const activeStyleOff = (target) => {
		if (target) {
			target.style.marginTop = "2px";
			target.style.boxShadow = "0 3px #545454";
		}
	};
	const disableStyleOff = (target) => {
		if (target) {
			target.style.marginTop = "0";
			target.style.boxShadow = "2px 2px 3px black";
		}
	};

	useEffect(() => {
		document.body.onkeydown = (e) => {
			setKeyPressed(e.key);

			let keyBoardPress = e.key.toUpperCase();
			let file;
			let trigger;
			sounds.forEach((item) => {
				if (keyBoardPress === item.keyTrigger) {
					file = item.url;
					setSoundName(item.id);
					trigger = item.keyTrigger;
				}
			});

			const audioElement = new Audio(file);
			let target = document.getElementById(trigger);
			if (power) {
				audioElement.volume = volume / 100;
				audioElement.play();

				// console.log(trigger);

				activeStyle(target);

				setTimeout(() => disableStyle(target), 100);
			} else {
				activeStyleOff(target);
				setTimeout(() => disableStyleOff(target), 100);
			}
		};
		// NEED TO REMOVE LISTENER SOMEHOW*******
	}, [setKeyPressed, keyPressed, sounds, setSoundName, power, volume]);

	const buttonClick = (e) => {
		let pressedKey = e.target.innerText;
		let file;

		sounds.forEach((item) => {
			if (pressedKey === item.keyTrigger) {
				setSoundName(item.id);
				file = item.url;
			}
		});

		const audioElement = new Audio(file);
		if (power) {
			audioElement.volume = volume / 100;
			audioElement.play();

			activeStyle(e.target);

			setTimeout(() => disableStyle(e.target), 100);
		} else {
			activeStyleOff(e.target);
			setTimeout(() => disableStyleOff(e.target), 100);
		}
	};

	return (
		<div className="drumpad">
			<button id="Q" onClick={buttonClick}>
				Q
			</button>
			<button id="W" onClick={buttonClick}>
				W
			</button>
			<button id="E" onClick={buttonClick}>
				E
			</button>
			<button id="A" onClick={buttonClick}>
				A
			</button>
			<button id="S" onClick={buttonClick}>
				S
			</button>
			<button id="D" onClick={buttonClick}>
				D
			</button>
			<button id="Z" onClick={buttonClick}>
				Z
			</button>
			<button id="X" onClick={buttonClick}>
				X
			</button>
			<button id="C" onClick={buttonClick}>
				C
			</button>
			{/* <button>HELLO</button> */}
		</div>
	);
}

export default Drumpad;
