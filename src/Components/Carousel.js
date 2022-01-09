import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
    background-size: cover;
	width: 45vw;
	height: 25vw;
	background-position: center;
	border: 1px solid gray;
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Arrow = styled.span`
	color: rgba(30,100,30,0.7);
	font-size: 48px;
	cursor: pointer;
    margin: 10px
	
`;

function Carousel({ images }) {
	console.log(images.length);
	let [currentIdx, setCurrentIdx] = useState(0);
	console.log(images[currentIdx].url);

	function showNextImage(next) {
		console.log('next', next);
		console.log('current:', currentIdx);

		if (currentIdx + next >= images.length) {
			setCurrentIdx(currentIdx + next - images.length);
		} else if (currentIdx + next < 0) {
			setCurrentIdx(currentIdx + next + images.length);
		} else {
			setCurrentIdx(currentIdx + next);
		}

		// setCurrentIdx(currentIdx += 1)
	}
	return (
		<CarouselContainer
			style={{ backgroundImage: `url(${images[currentIdx].url}` }}>
			<Arrow onClick={() => showNextImage(-1)}>◀︎</Arrow>
			<Arrow onClick={() => showNextImage(1)}>▶︎</Arrow>
		</CarouselContainer>
	);
}

export default Carousel;
