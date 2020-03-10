import React from 'react';
import { ItemRow, ImageContainer } from '../styles/Table';
import { DeleteButton, ButtonContainer } from '../styles/Button';

export const Celebrity = ({ picture, name, popularity, id, removeContact }) => {
	return (
		<ItemRow>
			<ImageContainer>
				<img src={picture} />
			</ImageContainer>
			<p>{name}</p>
			<p>{Number.parseFloat(popularity).toFixed(2)}</p>
			<ButtonContainer>
				<DeleteButton onClick={() => removeContact(id)}>Delete</DeleteButton>
			</ButtonContainer>
		</ItemRow>
	);
};
