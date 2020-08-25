import React from 'react';
import styled from 'styled-components';
import { BsFillMicFill } from 'react-icons/bs';
import { RiEmotionLaughLine } from 'react-icons/ri';

const Container = styled.div`
    height: fit-content;
    width: 100%;

    

    background-color: #EEE;
    display: flex;

    align-items: center;

    input {
        flex-grow: 1;
        border-radius: 50px;
        border: none;
        padding: 8px 16px;
    }

    span {
        padding: 16px;
    }
`;


function ChatInput() {
    return (
        <Container>
            <span>
                <RiEmotionLaughLine size={24} color={"gray"} />
            </span>
            <input type="text" placeholder={"Type a message"} />
            <span>
                <BsFillMicFill size={24} color={"gray"} />
            </span>
        </Container>
    );
}

export default ChatInput;