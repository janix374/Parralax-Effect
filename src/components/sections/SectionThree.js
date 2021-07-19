import React, { useRef } from 'react';
import Cumulus from '../clouds/Cumulus';
import { CumulusThree, CumulusFive } from '../clouds/clouds';
import PropTypes from 'prop-types';

const SectionThree = () => {
	return (
		<section className='section-three'>
			<div className='section-three-text'>
				<div className='section-one-text-title'>
					<h2>Air-Ship Articles</h2>
				</div>

				<div className='article-card'>
					<div className='article-card-image'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fronalpstock_big.jpg/1200px-Fronalpstock_big.jpg'
							alt='pics'
						/>
					</div>
					<div className='article-card-title'>
						<h3>About Us</h3>
					</div>
					<div className='article-card-content'>Content</div>
				</div>
			</div>
		</section>
	);
};
SectionThree.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionThree;
