import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
// eslint-disable-next-line import/named
import { Wrapper, Grid, Item, Content, Stats, Languages, Thumbnail } from './styles';
import ethereum from '../../../assets/logos/png/03.png';
import blockstack from '../../../assets/logos/png/04.png';
import aragon from '../../../assets/logos/png/05.png';
import decentraland from '../../../assets/logos/png/02.png';
import enjin from '../../../assets/logos/png/06.png';
import unity from '../../../assets/logos/png/07.png';

export const Platforms = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 3) {
                    nodes {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="platforms">
      <h2>Platforms we build on</h2>
      <Grid>
        <Item key={0} as="a" href="https://ethereum.org/en/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={ethereum} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Ethereum</p>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://www.blockstack.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={blockstack} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Blockstack</p>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://aragon.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={aragon} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Aragon</p>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://decentraland.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={decentraland} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Decentraland</p>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://enjin.io/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={enjin} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Enjin</p>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://unity.com/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={unity} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
            <p>Unity</p>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
