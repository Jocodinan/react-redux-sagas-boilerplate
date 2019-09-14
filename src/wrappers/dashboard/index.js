import React, { useEffect } from 'react';

const MainContent = ({ generalStates, getUsers }) => {
	useEffect(() => {
    getUsers();
	}, []);
    
	const items = generalStates.get('data').map((item) => {
		return <li>{ `${item.getIn(["name", "first"]) } ${ item.getIn(["name", "last"])}` }</li>
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