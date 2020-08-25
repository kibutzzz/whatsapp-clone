import React from 'react';
import styled from 'styled-components';
import { FaUsers } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    width: 100%;
    height: fit-content;

    padding: 8px 16px;

    background-color: #EEE;
    border-left: 1px solid lightgray;
    border-bottom: 1px solid lightgray;

    #UserImageContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        
        padding: 4px;
        
        border-radius: 50%;
        background-color: white;

        overflow: hidden;
    }

    #info {
        flex-grow: 1;
        display: flex;
        flex-direction: column;

        padding: 0 8px;

        > :nth-child(2) {
            font-size: 0.85rem;
        }
    }

    #options {
        display: flex;
        
        > span {
            display: block; 
            padding: 0 12px;
        }
    }
`;


function ConversationHeader() {
    return (
        <Container>
            <span id="UserImageContainer">
                <FaUsers size={24} color={"#888"} />
            </span>
            <div id="info">
                <span><strong>Group name</strong></span>
                <span>participants</span>
            </div>
            <div id="options">
                <span ><GoSearch size={24} color={"#888"} /></span>
                <span ><FiPaperclip size={24} color={"#888"} /></span>
                <span ><BsThreeDotsVertical size={24} color={"#888"} /></span>
            </div>
        </Container>
    );
}

export default ConversationHeader;