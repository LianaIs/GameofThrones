import React from 'react';
import styled from 'styled-components';

const cover_url = 'http://www.newtimelinecover.com/thumbnail/16/1663.jpg';


const Cover = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: fixed;
width: 100%;
height: 40%;
background-image: url(${cover_url});
`;



export default Cover;
