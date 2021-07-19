import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import {
	CumulusOne,
	CumulusTwo,
	CumulusThree,
	CumulusFour,
} from '../clouds/clouds';
import PropTypes from 'prop-types';

const SectionOne = ({ offsetY }) => {
	const sectionOneRef = useRef();
	const rightMove = offsetY;

	return (
		<section className='section-one' ref={sectionOneRef}>
			<div className='section-one-animations'>
				<Cumulus top={2} left={-20}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={5} left={45}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={14} left={-30}>
					<CumulusTwo />
				</Cumulus>

				<Cumulus top={20} left={50}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={33} left={-20}>
					<CumulusOne />
				</Cumulus>

				<Cumulus top={40} left={30}>
					<CumulusThree />
				</Cumulus>

				<Cumulus top={49} left={-20}>
					<CumulusTwo />
				</Cumulus>

				<Cumulus top={60} left={30}>
					<CumulusFour />
				</Cumulus>

				<Cumulus top={70} left={-30}>
					<CumulusThree />
				</Cumulus>

				<Cumulus top={80} left={60}>
					<CumulusThree />
				</Cumulus>
			</div>
			<div className='section-one-text'>
				<div className='section-one-text-title'>
					<h2>The Age of the Airship May Be Dawning Again</h2>
				</div>
				<div className='section-one-text-about'>
					<h3>About Us</h3>
					<p>
						Our goal is to continue manufacturing the world’s most advanced
						balloons and airships. We believe that we are more than suppliers;
						we are partners with our customers and provide them with both the
						best balloon systems and a great ongoing back up service. Our
						products are intended for business and leisure aviation. Every
						balloon should be just perfect, reasonably priced, available in
						every country and built to suit each individual.
					</p>
				</div>
				<div className='section-one-text-about'>
					<h3>Basic information</h3>
					<p>
						Company name: Dirizabl <br />
						Main address: BB <br />
						Commercial ID No: XXXXXX <br />
						Phone: +381 069 XXX XXX <br />
					</p>
				</div>
			</div>
		</section>
	);
};

SectionOne.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionOne;
