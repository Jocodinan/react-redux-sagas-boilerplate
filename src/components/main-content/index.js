import React, { useEffect } from 'react';

const MainContent = ({ generalStates, getUsers  }) => {
	useEffect(() => {
		getUsers();
	});
    
	const items = generalStates.get('data').map((item) => {
		return <li>data</li>
	})

	return (
		<main>
			<ul>
					{ items }
			</ul>
		</main>
	);
};

export default MainContent;