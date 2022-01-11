import React from 'react';
import { Title, Content, AccorionHeader } from './Accordion';

function AccordionItem({ title, content, toggleContent, idx, showContent }) {
	return (
		<div className='accordion_item'>
			<AccorionHeader
				className={
					showContent ? 'accordion_item_title active' : 'accordion_item_title'
				}
				onClick={() => toggleContent(idx)}>
				<Title>{title}</Title>
				<Title>{showContent ? '-' : '+'}</Title>
			</AccorionHeader>

			{showContent && <Content>{content}</Content>}
		</div>
	);
}

export default AccordionItem;
