import React from 'react';
import styled from 'styled-components';


const Form = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 380px;
height: 460px;
padding : 0px;
border-radius: 5%;

`;

const Name = styled.h4`
  font-family: serif;
`;
const Episode = styled.h5`
 font-family:serif;
`;
const Summary = styled.h5`
 font-family:serif;
 background: repeating-linear-gradient(
  -55deg,
  #FFF,
  #FFF 10px,
  #DDD 10px,
  #DDD 15px
);
`;

const pic_style = {
  flexShrink: 0,
  width: 350,
  height: 220,
  borderRadius: '5%'
};


const Epoes = ({ ep }) =>
  <Form>
    <Name>{ep.name}</Name>
    <Episode>
      Season {ep.season}։
      episode {ep.number}
    </Episode>
    <div>
      <img alt={''} src={ep.image.original} style={pic_style} />
      <Summary>
      {ep.summary.replace('<p>', '').replace('</p>', '')}
      </Summary>
    </div>
  </Form>;

export default Epoes;
