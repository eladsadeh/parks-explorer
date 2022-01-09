import React from 'react';
import { Title, Content, AccorionHeader, Activity } from './Accordion';

function Activities({ title, content, toggleContent, idx, showContent }) {

	return (
		<div className='accordion_item'>
			<AccorionHeader
				className='accordion_item_title'
				onClick={() => toggleContent(idx)}>
				<Title>{title}</Title>
				<Title>{showContent ? '-' : '+'}</Title>
			</AccorionHeader>
			{showContent && (
				<Content>
					{content.map((activity, i) => {
						return <Activity key={i}>{activity.name}</Activity>;
					})}
				</Content>
			)}
		</div>
	);
}

export default Activities;
