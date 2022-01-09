import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 50vw;
	background-position: center;
	border: 1px solid gray;
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Arrow = styled.span`
	color: rgba(0, 0, 0, 0.5);
	font-size: 48px;
	cursor: pointer;
	margin: 10px;
`;

function Carousel({ images }) {
	console.log(images.length);
	let [currentIdx, setCurrentIdx] = useState(0);

	function showNextImage(next) {
		if (currentIdx + next >= images.length) {
			setCurrentIdx(currentIdx + next - images.length);
		} else if (currentIdx + next < 0) {
			setCurrentIdx(currentIdx + next + images.length);
		} else {
			setCurrentIdx(currentIdx + next);
		}
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
