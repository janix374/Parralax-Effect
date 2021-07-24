import React, { useState, useEffect } from 'react';
import Airship from '../parallaxobject/Airship';
import SectionOne from '../sections/SectionOne';
import SectionTwo from '../sections/SectionTwo';
import SectionThree from '../sections/SectionThree';
import LoginButton from '../admin/LoginButton';
import Birds from '../parallaxobject/Birds';
import Balloon from '../parallaxobject/Balloon';
import Zeppelin from '../parallaxobject/Zeppelin';
import SectionFour from '../sections/SectionFour';
import ZeppelinTwo from '../parallaxobject/ZeppelinTwo';

const Sky = ({ articles, handleLimit, limit, error }) => {
	return (
		<div className='container'>
			<LoginButton />
			<Airship />
			<Birds topOffSet={9000} />
			<Balloon topOffSet={5000} />
			<Zeppelin topOffSet={6500} />
			<ZeppelinTwo topOffSet={8000} />
			<SectionOne />
			<SectionTwo />
			<SectionThree
				articles={articles}
				handleLimit={handleLimit}
				limit={limit}
				error={error}
			/>
			<SectionFour />
		</div>
	);
};

export default Sky;
