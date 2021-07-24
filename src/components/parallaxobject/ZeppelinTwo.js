import React, { useRef, useState, useEffect } from 'react';
import zeppelinTwoPics from '../../images/zeppelin2.png';
import PropTypes from 'prop-types';

const ZeppelinTwo = ({ topOffSet }) => {
	const zeppelinTwoRef = useRef();
	const [offsetY, setOffsetY] = useState(0);
	const hendleScroll = () => setOffsetY(window.pageYOffset);
	let styles = {
		transform: `translate(0px, 0px)`,
		top: `${topOffSet}px`,
	};

	if (offsetY < topOffSet - 2000) {
		styles = { transform: `translate(0px, 0px)`, top: `${topOffSet}px` };
	} else {
		styles = {
			transform: `translate(${(offsetY - topOffSet + 2000) * 0.3}px, ${
				(offsetY - topOffSet + 2000) * 0.1
			}px)`,
			top: `${topOffSet}px`,
		};
	}

	useEffect(() => {
		window.addEventListener('scroll', hendleScroll);
		return () => window.removeEventListener('scroll', hendleScroll);
	}, []);

	return (
		<div
			className='parallax-object-zeppelin-two'
			ref={zeppelinTwoRef}
			style={styles}
		>
			<img src={zeppelinTwoPics} alt='zeppelin 2' />
		</div>
	);
};

export default ZeppelinTwo;
