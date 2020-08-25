import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;

    background-color: #EEE;

    padding: 16px;
    
    input {
        padding: 8px 24px;
        border-radius: 24px;
        border: none;
        
        width: 100%;
    }
`;


function ConversationSearch() {
    return (
        <Container>
           <input type="text" placeholder="Search or start new Chat"/>
        </Container>
    );
}

export default ConversationSearch;