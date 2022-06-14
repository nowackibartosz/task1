import React from 'react';

const ListItem = ({ id, name, year, color }) => (
	<tr style={{ backgroundColor: color }}>
		<td>{id}</td>
		<td>{name}</td>
		<td>{year}</td>
	</tr>
);
export default ListItem;
