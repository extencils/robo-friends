import React from 'react';

//const Card = (props) => {
const Card = ({ id, name, email }) => {
	//const { id, name, email } = props;	
	const theSrc = 'https://robohash.org/'+id+'?200x200';
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='photo' src={theSrc} />
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
		</div>
		</div>
	);
}

export default Card;