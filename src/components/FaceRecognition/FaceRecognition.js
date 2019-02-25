import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className='center ma0'>
			<div className='absolute mt2'>
				<img id='inputimage' src={imageUrl} width='500px' height='auto' alt='foto'/>
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom:box.bottomRow, left: box.leftCol}}></div>
			</div>
		</div>
	);
}

export default FaceRecognition;
