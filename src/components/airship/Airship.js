import React, { useState } from 'react';
import airship from '../../images/airship.png';
import PropTypes from 'prop-types';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark';

const Airship = ({ offsetY }) => {
	const [hideAirShip, setHideAirShip] = useState(false);
	let styles = { transform: `translateX(0px)` };

	// if (offsetY < 5000) {
	// 	styles = { transform: `translateX(0px)` };
	// } else if (offsetY < 15000) {
	// 	styles = { transform: `translateX(${(offsetY - 5000) * 0.1}px)` };
	// } else if (offsetY < 20000) {
	// 	styles = { transform: `translateX(1000px)` };
	// } else if (offsetY < 30000) {
	// 	styles = { transform: `translateX(${1000 - (offsetY - 20000) * 0.1}px)` };
	// } else if (offsetY < 100000) {
	// 	styles = { transform: `translateX(0px)` };
	// }

	const handleHiding = () => {
		setHideAirShip(!hideAirShip);
	};

	console.log(offsetY);
	return (
		<>
			{hideAirShip ? (
				<button className='airship-button' type='button' onClick={handleHiding}>
					<img src={airship} alt='airship' />
				</button>
			) : (
				''
			)}

			<div className='airship' style={styles}>
				{hideAirShip ? (
					''
				) : (
					<img src={airship} alt='airship' onClick={handleHiding} />
				)}
			</div>
		</>
	);
};

Airship.propTypes = {
	offsetY: PropTypes.number,
};

export default Airship;
