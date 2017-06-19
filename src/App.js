import React, { Component } from 'react';
import Cover from './components/Cover';
import Epoes from './components/Epoes';
import styled from 'styled-components';


const fetch_url =
  'https://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes';

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-size: cover;
`;

const Container = Div.extend`
  flex-direction: column;
`;

const Body = Div.extend`
  justify-content: space-around;
  flex-direction: row;
  position: fixed;
  top:20%;
  width: 100%;
`;

const Button = styled.button`
    border-radius: 8px;
    height: 5rem;
    font-size:0.8em;
    color: black;
    &:hover {
`;

class App extends Component {
  rightHandler = () => {
    let { i, j, k } = this.state;
    const number = this.state.episodes[i].number;
    let n = this.state.episodes.length - 1;
    if (number === '0') this.fetch();
    else {
      i = (i + 3) % n;
      j = (j + 3) % n;
      k = (k + 3) % n;
    }
    this.setState({ i, j, k, episodes: this.state.episodes });
  };

  leftHandler = () => {
    let { i, j, k } = this.state;
    const number = this.state.episodes[i].number;
    if (number === '0') this.fetch();
    else {
      if (k === 2) {
        i = 57;
        j = 58;
        k = 59;
      } else {
        i -= 3;
        j -= 3;
        k -= 3;
      }
      this.setState({ i, j, k, episodes: this.state.episodes });
    }
  };

  async fetch() {
    try {
      const req = await fetch(fetch_url);
      const data = await req.json();
      this.setState({ episodes: data._embedded.episodes });
    } catch (e) {
      console.error(e);
    }
  }
  state = {
    i: 0,
    j: 1,
    k: 2,
    episodes: [
      {image: '',
      name: 'NAME',
      number: '0',
      season: '0',
      summary: 'summary'},

      {image: '',
      name: 'NAME',
      number: '0',
      season: '0',
      summary: 'summary'},

      {image: '',
      name: 'NAME',
      number: '0',
      season: '0',
      summary: 'summary'}
    ]
  };
  render() {
    return (
      <Container>
        <Cover />
        <Body>
          <Button onClick={this.leftHandler}>
            Prev.
          </Button>
          <Epoes ep={this.state.episodes[this.state.i]} />
          <Epoes ep={this.state.episodes[this.state.j]} />
          <Epoes ep={this.state.episodes[this.state.k]} />
          <Button onClick={this.rightHandler}>
            Next
          </Button>
        </Body>
      </Container>
    );
  }
}

export default App;
