import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusThree,
	CumulusFour,
} from '../clouds/clouds';
import PropTypes from 'prop-types';

function SectionTwo({ offsetY }) {
	const sectionTwoRef = useRef();
	const rightMove = offsetY;
	// if (sectionTwoRef.current) {
	// 	console.log(sectionTwoRef.current.offsetTop);
	// }

	return (
		<section className='section-two' ref={sectionTwoRef}>
			<Cumulus top={2} left={-20}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={3} left={40}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={7} left={15}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={15} left={-30}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={19} left={-15}>
				<CumulusOne />
			</Cumulus>

			<Cumulus top={24} left={20}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={27} left={-17}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={30} left={17}>
				<CumulusFour />
			</Cumulus>

			<Cumulus top={35} left={-18}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={41} left={36}>
				<CumulusThree />
			</Cumulus>

			<Cumulus top={67} left={18}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={71} left={43}>
				<CumulusTwo />
			</Cumulus>

			<Cumulus top={83} left={-20}>
				<CumulusTwo />
			</Cumulus>
		</section>
	);
}
SectionTwo.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionTwo;
