import React from 'react';
import pics1 from '../../images/pics1.jpg';
import pics2 from '../../images/pics2.jpg';
import pics3 from '../../images/pics3.jpg';
import pics4 from '../../images/pics4.jpg';

const TextForSectionOne = () => {
	return (
		<div className='section-one-text'>
			<div className='section-one-text-title'>
				<h2>The Age of the Airship May Be Dawning Again</h2>
			</div>
			<div className='section-one-text-about'>
				<h3>This is the AirShip Blog</h3>
				<p>History of Airships and Balloons</p>
				<p>
					Background of Airships and Balloons <br />
					Balloons and airships lift because they are buoyant, meaning that the
					total weight of the airship or balloon is less than the weight of the
					air it displaces. The Greek philosopher Archimedes first established
					the basic principle of buoyancy. Hot air balloons were first flown by
					the brothers Joseph and Etienne Montgolfier as early as the spring of
					1783. While the materials and technology are very different, the
					principles used by the earliest eighteenth-century experimenters
					continue to carry modern sport and weather balloons aloft.
				</p>
				<p>
					Hot Air Balloons and the Montgolfier Brothers <br />
					Joseph and Jacques Montgolfier, paper mill owners, were trying to
					float bags made of paper and fabric. When the brothers held a flame
					near the opening at the bottom, the bag (called a balloon) expanded
					with hot air and floated upward. The Montgolfier brothers built a
					larger paper-lined silk balloon and demonstrated it on June 4, 1783,
					in the marketplace at Annonay. Their balloon (called a Montgolfiere)
					lifted 6,562 feet into the air.
				</p>
				<div className='text-center my-2 pisc-box-shadow'>
					<img src={pics1} alt='airship' />
				</div>
				<p>Hydrogen Balloon with Flapping Devices</p>
				<p>
					First Balloon Flight Across the English Channel <br />
					Jean-Pierre Blanchard soon moved to England, where he gathered a small
					group of enthusiasts, including Boston physician, John Jeffries. John
					Jeffries offered to pay for what became the first flight across the
					English Channel in 1785. John Jeffries later wrote that they sank so
					low crossing the English Channel that they threw everything overboard
					including most of their clothing, arriving safely on land "almost
					naked as the trees."
				</p>
				<p>Henri Giffard and the Dirigible</p>
				<p>
					Early balloons were not truly navigable. Attempts to improve
					maneuverability included elongating the balloon's shape and using a
					powered screw to push it through the air.
				</p>
				<p>The Baldwin Dirigible</p>
				<p>
					During the summer of 1908, the U.S. Army tested the Baldwin dirigible.
					Lts. Lahm, Selfridge, and Foulois flew the dirigible. Thomas Baldwin
					was appointed by the United States Government to superintend the
					building of all spherical, dirigible and kite balloons. He built the
					first Government airship in 1908. American inventor Thomas Baldwin
					built a 53-foot airship, the California Arrow. It won a one-mile race
					in October 1904, at the St. Louis World Fair with Roy Knabenshue at
					the controls. In 1908, Baldwin sold the U.S. Army Signal Corps an
					improved dirigible that was powered by a 20-horsepower Curtiss engine.
					This machine, designated the SC-1, was the Army's first powered
					aircraft.
				</p>
				<div className='text-center my-2 pisc-box-shadow'>
					<img src={pics4} alt='airship' />
				</div>
				<p>Who Was Ferdinand Zeppelin?</p>
				<p>
					Zeppelin was the name given to the duralumin-internal-framed
					dirigibles invented by the persistent Count Ferdinand von Zeppelin.
					The first rigid framed airship flew on November 3, 1897, and was
					designed by David Schwarz, a timber merchant. Its skeleton and outer
					cover were made of aluminum. Powered by a 12-horsepower Daimler gas
					engine connected to three propellers, it lifted off successfully in a
					tethered test at Templehof near Berlin, Germany, however, the airship
					crashed.
				</p>
				<div className='text-center my-2 pisc-box-shadow'>
					<img src={pics2} alt='airship' />
				</div>
				<p>The Nonrigid Airship and Semirigid Airship</p>
				<p>
					The airship evolved from the spherical balloon first successfully
					flown by the Montgolfier brothers in 1783. Airships are basically
					large, controllable balloons that have an engine for propulsion, use
					rudders and elevator flaps for steering, and carry passengers in a
					gondola suspended under the balloon. There are three types of
					airships: the nonrigid airship, often called a blimp; the semirigid
					airship, and the rigid airship, sometimes called a Zeppelin. The first
					effort at building an airship involved stretching the round balloon
					into an egg shape that was kept inflated by internal air pressure.
					These non-rigid airships, commonly called blimps, used ballonets,
					airbags located inside the outer envelope that expanded or contracted
					to compensate for changes in the gas. Because these blimps often
					collapsed under stress, designers added a fixed keel under the
					envelope to give it strength or enclosed the gas bag inside a frame.
					These semirigid airships were often used for reconnaissance flights.
				</p>
				<p>Rigid Airship or Zeppelin</p>
				<p>
					The rigid airship was the most useful type of airship. A rigid airship
					has an internal framework of steel or aluminum girders that support
					the outside material and gives it shape. Only this type of airship
					could reach sizes that made it useful for carrying passengers and
					cargo.
				</p>
				<div className='text-center my-2 pisc-box-shadow'>
					<img src={pics3} alt='airship' />
				</div>
			</div>
		</div>
	);
};

export default TextForSectionOne;
