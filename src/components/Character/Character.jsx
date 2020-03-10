import React from 'react';
import styled from 'styled-components';

import { Img, FlexWrapper } from '../../styled';

function Character({ character }) {
  return (
    <Wrapper>
      <Img src={character.image} alt={character.name} />
      <CharacterBio>
        <Name>{character.name}</Name>
        <Field>
          <Label>GENDER: </Label>
          <Gender>{character.gender}</Gender>
        </Field>
        <Field>
          <Label>SPECIES: </Label>
          <Species>{character.species}</Species>
        </Field>
        <Field>
          <Label>STATUS: </Label>
          <Status>{character.status}</Status>
        </Field>
        <Field>
          <Label>TYPE: </Label>
          <Type>{character.type || 'unknown'}</Type>
        </Field>
        <Field>
          <Label>ORIGIN: </Label>
          <Origin>{character.origin.name}</Origin>
        </Field>
        <Field>
          <Label>LOCATION: </Label>
          <Location>{character.location.name}</Location>
        </Field>
      </CharacterBio>
    </Wrapper>
  );
}

export default Character;

const Wrapper = styled(FlexWrapper)`
  margin: 20px 12px;
  width: auto;
`;

const CharacterBio = styled.div`
  width: 100%;
  padding: 15px;

  p {
    margin: 0;
  }
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

const Label = styled.label`
  margin-right: 5px;
  font-size: 14px;
  font-weight: 300;
  color: #666666;
`;

const Name = styled.p`
  font-size: 40px;
  font-weight: 300;
  color: #5f9ea0;
`;

const Status = styled.p``;
const Species = styled.p``;
const Type = styled.p``;
const Gender = styled.p``;
const Origin = styled.p``;
const Location = styled.p``;
