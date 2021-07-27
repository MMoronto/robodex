import React from 'react';

const Card = ({ name, email, id }) => {

	return (
			<div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
				<h1>Robodex</h1>
				<h3>Rolodex for your robot buddies</h3>

				<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		);
}

export default Card;