import React from 'react';
import styled from 'styled-components';
import { MdNotificationsOff } from 'react-icons/md';

const Container = styled.div`
    display: flex;
    width: 100%;

    background-color: lightblue;

    padding: 16px;
    > span {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: white;
        border-radius: 50%;

        width: 48px;
        height: 48px;
    }

    div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 4px 16px;
        color: #333;

        justify-content: space-between;

    }
`;


function Notification() {
    return (
        <Container>
            <span>
                <MdNotificationsOff size={28} color={"lightblue"} />
            </span>
            <div>
                <span>Get notified of new messages</span>
                <small>Turn on desktop notifications ></small>
            </div>
        </Container>
    );
}

export default Notification;