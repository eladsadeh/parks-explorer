import React, { useState } from 'react';
import styled from 'styled-components';
import Activities from './Activities';
import AccordionItem from './AccordionItem';

export const Title = styled.h2`
	color: black;
	font-size: 16px;
`;

export const Content = styled.p`
	display: flex;
	flex-wrap: wrap;
	color: black;
	font-size: 14px;
	text-align: left;
    padding: 0 10px;
	width: 100%;
`;

export const AccorionHeader = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	padding: 0 10px;
`;

export const Activity = styled.span`
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	border: 1px solid black;
	border-radius: 12px;
	margin: 5px;
	padding: 5px 10px;
`;

const AccordionWrap = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: 0 0 3px 3px black;
`;

function Accordion({ data }) {
	const initialAccordionState = [true, false, false];
	const [showContent, setShowContent] = useState(initialAccordionState);

	function toggleContent(index) {
		const newState = showContent.map((val, idx) => {
			return idx === index ? !val : false;
		});
		setShowContent(newState);
	}

	return (
		<AccordionWrap className='accordion'>
			<AccordionItem
				toggleContent={toggleContent}
				idx={0}
				showContent={showContent[0]}
				title='Description'
				content={data.description}></AccordionItem>
			<AccordionItem
				toggleContent={toggleContent}
				idx={1}
				showContent={showContent[1]}
				title='Weather Information'
				content={data.weatherInfo}></AccordionItem>
			<Activities
				toggleContent={toggleContent}
				idx={2}
				showContent={showContent[2]}
				title='Activities'
				content={data.activities}
			/>
		</AccordionWrap>
	);
}

export default Accordion;
