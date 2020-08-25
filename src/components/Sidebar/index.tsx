import React from 'react';
import styled from 'styled-components';
import  SidebarHeader  from "../SidebarHeader";
import  Notification  from "../Notification";
import ConversationSearch from '../ConversationSearch';
import ChatItem from '../ChatItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    height: 100%;

`;


function Sidebar() {
    return (
        <Container>
            <SidebarHeader />
            <Notification />
            <ConversationSearch />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </Container>
    );
}

export default Sidebar;