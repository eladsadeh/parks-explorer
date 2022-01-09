import React from 'react';

function Activities({ activities }) {

	return (
		<div>
			Activities list
			{activities.map((activity, idx) => {
				return <span key={idx}>{activity.name}</span>;
			})}
		</div>
	);
}

export default Activities;
