import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Drumpad from "./components/Drumpad";
import { bankOne, bankTwo } from "./soundbank/soundbank";

function App() {
	const [power, setPower] = useState(true);
	const [sounds, setSounds] = useState(bankOne);
	const [soundName, setSoundName] = useState("");
	const [volume, setVolume] = useState(50);

	return (
		<div className="appContainer">
			<h5 className="appContainer__logo">D DRUM MXN</h5>
			<Drumpad
				sounds={sounds}
				soundName={soundName}
				setSoundName={setSoundName}
				power={power}
				volume={volume}
			/>
			<Controls
				sounds={sounds}
				soundName={soundName}
				setSounds={setSounds}
				bankOne={bankOne}
				bankTwo={bankTwo}
				setSoundName={setSoundName}
				power={power}
				setPower={setPower}
				volume={volume}
				setVolume={setVolume}
			/>
		</div>
	);
}

export default App;

// responsiveness

// LOOK FOR A CALCULATOR SEE HOW ITS DONE IN REACT.. or a real drumpad or the like
