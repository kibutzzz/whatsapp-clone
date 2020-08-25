import React from 'react';
import styled from 'styled-components';
import ConversationHeader from '../ConversationHeader';


const Container = styled.div`
    flex-grow: 1;

    height: 100%;
`;


function Conversation() {
    return (
        <Container>
            <ConversationHeader />
        </Container>
    );
}

export default Conversation;