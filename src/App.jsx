import React, { useState } from 'react';
import styled from 'styled-components';

import Character from './components/Character';
import Episode from './components/Episode';
import RecommendedCharacters from './components/RecommendedCharacters';
import useAsyncLoader from './utils/useAsyncLoader';
import { FlexWrapper, GlobalStyle, Header, Headline } from './styled';
import Searchbox from './components/Searchbox';

const transform = data =>
  data.map(obj => ({ ...obj, value: obj.id, label: obj.name }));

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [data] = useAsyncLoader('character');

  const onChange = value => {
    setSelectedCharacter(value);
  };

  return (
    <Container>
      <GlobalStyle />
      <Headline>Rick and Morty episodes in which my character appears</Headline>
      {data && (
        <Searchbox
          defaultOptions={transform(data.results)}
          onChange={onChange}
        />
      )}
      {selectedCharacter && <Character character={selectedCharacter} />}
      {selectedCharacter && (
        <RecommendedCharacters
          onSelect={onChange}
          query={{ species: selectedCharacter.species }}
          selectedCharacter={selectedCharacter}
        />
      )}
      {selectedCharacter && (
        <>
          <Header className="episode-header">Episodes</Header>
          <Episodes>
            {selectedCharacter.episode.map((episode, id) => (
              <Episode key={id} episode={episode} />
            ))}
          </Episodes>
        </>
      )}
    </Container>
  );
}

export default App;

const Container = styled.section`
  max-width: 1024px;
  margin: 30px auto 0;

  .episode-header {
    margin: 20px 12px;
  }
`;

const Episodes = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${FlexWrapper} {
    flex: 0 0 29%;
    margin: 12px;
    padding: 10px;
    background-color: #8fbc8f;
    min-height: 70px;
    flex-direction: column;
  }
`;
