import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import morePics from '../../images/more.png';

const SectionThree = ({ articles, handleLimit, limit, error }) => {
	const timestamp = (ts) => {
		const date = new Date(ts * 1000);
		return (
			date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
		);
	};

	const timestampminut = (ts) => {
		const date = new Date(ts * 1000);
		return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	};

	return (
		<section className='section-three'>
			<div className='section-three-text-title'>
				<h2>Air-Ship Articles</h2>
			</div>
			{error ? (
				<h2 className='text-center my-3'>Error loading...</h2>
			) : (
				<div>
					{articles.map((item) => {
						return (
							<div key={item.id} className='section-three-text'>
								<div className='section-three-article-card'>
									{item.featureImage.length > 0 ? (
										<div
											className='section-three-article-card-image'
											style={{ backgroundImage: `url(${item.featureImage})` }}
										></div>
									) : (
										''
									)}

									<div className='section-three-article-card-title'>
										<h3>{item.title}</h3>
									</div>
									<div className='section-three-article-card-content'>
										{parse(item.content)}
									</div>
									<div className='section-three-article-card-created'>
										<span>{timestamp(item.createDate.seconds)}</span>
										{/* <span>{timestampminut(item.createDate.seconds)}</span> */}
									</div>
								</div>
							</div>
						);
					})}

					{articles.length < limit ? (
						''
					) : (
						<div className='more-button'>
							<img src={morePics} alt='more' onClick={() => handleLimit()} />
						</div>
					)}
				</div>
			)}
		</section>
	);
};

SectionThree.propTypes = {
	offsetY: PropTypes.number,
};

export default SectionThree;
