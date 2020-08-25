import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    
    width: 100%;    
    height: fit-content;

    padding: 11px 16px;
    background-color: #FFF;

    position: relative;

    border-bottom: 1px solid lightgray;

    :hover {
        background-color: lightgray;
    }

    #UserImageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px;
        height: 48px;
        
        padding: 4px;
        
        border-radius: 50%;
        background-color: #DDD;

        overflow: hidden;
    }

    div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;

        padding: 6px 12px;
        justify-content: space-between;

        span {
            display:block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        > small {
            display: block;
            font-size: 0.9rem;
            color: #777;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 270px;
        }
    }

    #lastMessageTime {
        position: absolute;
        right: 16px;
        top: 14px;
        font-size: 0.9rem;
        color: #555;
    }
`;

function ChatItem() {
    return (
        <Container>
            <span id="UserImageContainer">
                <FaUser size={24} color={"#888"} />
            </span>
            <div>
                <span>+55 51 98765-4321</span>
                <small>Last message sent on this conversation by the other user</small>
            </div>
            <span id="lastMessageTime">
                {
                    new Date().toLocaleTimeString(navigator.language, {
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                }
            </span>
        </Container>
    );
}

export default ChatItem;