import React from 'react';
import styled, { keyframes } from 'styled-components';
import ExpireEmoji from './ExpireEmoji';

const bubble = keyframes`
    from {
        bottom: -15%;
    }
    to {
        bottom: 115%;
    }
`;

const StyledEmojiBubble = styled.span`
	position: absolute;
	font-size: ${({ size }) => `${size}rem`};
	left: ${({ left }) => `${left}%`};
	animation: ${bubble} 6s ease-out;
`;

function EmojiBubble(props) {
	return (
		<ExpireEmoji>
			<StyledEmojiBubble {...props}>{props.emoji}</StyledEmojiBubble>
		</ExpireEmoji>
	);
}

export default EmojiBubble;
