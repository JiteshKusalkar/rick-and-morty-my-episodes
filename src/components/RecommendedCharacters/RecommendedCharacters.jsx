import React from 'react';
import styled from 'styled-components';

import { getParams } from '../../api';
import { Header } from '../../styled';
import useAsyncLoader from '../../utils/useAsyncLoader';

function RecommendedCharacters({ query, selectedCharacter, onSelect }) {
  const [data] = useAsyncLoader('character', getParams(query));

  return (
    <Wrapper>
      <Header>Recommended Characters</Header>
      <List>
        {data &&
          data.results.reduce(
            (acc, character) => [
              ...acc,
              ...(selectedCharacter.id !== character.id
                ? [
                    <Name
                      key={character.id}
                      onClick={() => onSelect(character)}
                    >
                      {character.name},
                    </Name>
                  ]
                : [])
            ],
            []
          )}
      </List>
    </Wrapper>
  );
}

export default RecommendedCharacters;

const Wrapper = styled.div`
  margin: 12px;
`;

const List = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`;

const Name = styled.span`
  font-weight: 200;
  padding: 10px 0;
  margin-right: 5px;
  color: #0071b5;
  cursor: pointer;
`;
