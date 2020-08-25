import React from 'react';
import styled from 'styled-components';
import  SidebarHeader  from "../SidebarHeader";
import  Notification  from "../Notification";
import ConversationSearch from '../ConversationSearch';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    height: 100%;

    background-color: #AAA;
`;


function Sidebar() {
    return (
        <Container>
            <SidebarHeader />
            <Notification />
            <ConversationSearch />
        </Container>
    );
}

export default Sidebar;