import React from 'react';
import styled from 'styled-components';

import useAsyncLoader from '../../utils/useAsyncLoader';
import { FlexWrapper } from '../../styled';

function Episode({ episode }) {
  const [data, error] = useAsyncLoader(episode);

  return (
    <FlexWrapper>
      {data ? (
        <>
          <EpisodeInfo>
            <EpisodeNumber>{data.episode}</EpisodeNumber>
            <EpisodeName>{data.name}</EpisodeName>
          </EpisodeInfo>
          <EpisodeAirDate>{data.air_date}</EpisodeAirDate>
        </>
      ) : error ? (
        <Error>Error While Loading</Error>
      ) : (
        <Loader>Loading...</Loader>
      )}
    </FlexWrapper>
  );
}

export default Episode;

const EpisodeInfo = styled.div`
  color: #ffffff;
  width: 100%;
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`;

const Loader = styled.p`
  font-size: 30px;
  font-weight: 200;
  color: #eeeeee;
  margin: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
`;

const Error = styled(Loader)``;

const EpisodeNumber = styled.p`
  font-size: 30px;
  font-weight: 300;
`;

const EpisodeName = styled.p``;
const EpisodeAirDate = styled.p`
  margin-top: auto;
  margin-bottom: 0;
  font-size: 14px;
  color: #eeeeee;
`;
