import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../assets/back.jpg';
import Emoji from './Emoji';
import EmojiBubble from './EmojiBubble';
import Github from './Github';

const StyledApp = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${background}) center;
	background-size: contain;
`;

function App() {
	const emojiList = ['👏', '💩', '😂', '😡', '👽'];

	const [emojiQueue, setEmojiQueue] = useState([]);

	const randomSize = (min, max) =>
		(Math.random() * (max - min + 1) + min).toFixed(2);

	const randomLeft = () => Math.floor(Math.random() * 97 + 1);

	const handleClick = emoji => {
		setEmojiQueue(prevState => [
			...prevState,
			{ emoji, size: randomSize(2.2, 4.1), left: randomLeft() }
		]);
	};

	const emojiMarkup = emojiList.map((emoji, i) => (
		<Emoji key={i} emoji={emoji} handleClick={handleClick} />
	));

	const emojiBubbleMarkup = emojiQueue.map((emojiVals, i) => (
		<EmojiBubble key={i} {...emojiVals} />
	));

	return (
		<>
			<StyledApp>{emojiMarkup}</StyledApp>
			{emojiBubbleMarkup}
			<Github />
		</>
	);
}

export default App;
