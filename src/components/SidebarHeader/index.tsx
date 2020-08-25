import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';
import { BsCircle, BsThreeDotsVertical } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    width: 100%;
    height: fit-content;

    padding: 8px 16px;

    background-color: #EEE;

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

    #options {
        display: flex;
        
        > span {
            display: block; 
            padding: 0 12px;
        }
    }
`;


function SidebarHeader() {
    return (
        <Container>
            <span id="UserImageContainer">
                <FaUser size={24} color={"#888"} />
            </span>
            <div id="options">
                <span ><BsCircle size={24} color={"#888"} /></span>
                <span ><BiMessageDetail size={24} color={"#888"} /></span>
                <span ><BsThreeDotsVertical size={24} color={"#888"} /></span>
            </div>
        </Container >
    );
}

export default SidebarHeader;