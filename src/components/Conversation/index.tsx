import React from 'react';
import styled from 'styled-components';
import ConversationHeader from '../ConversationHeader';
import Chat from '../Chat';
import ChatInput from '../ChatInput';


const Container = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: gray;
`;


function Conversation() {
    return (
        <Container>
            <ConversationHeader />
            <Chat />
            <ChatInput />
        </Container>
    );
}

export default Conversation;