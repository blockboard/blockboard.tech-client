import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
// eslint-disable-next-line import/named
import { Wrapper, Grid, Item, Content, Stats, Languages, Thumbnail } from './styles';
import ethereum from '../../../assets/logos/ethereum-eth-logo.svg';
import blockstack from '../../../assets/logos/blockstack-stx-logo.svg';
import aragon from '../../../assets/logos/aragon-ant-logo.svg';
import decentraland from '../../../assets/logos/decentraland-mana-logo.svg';
import enjin from '../../../assets/logos/enjin-coin-enj-logo.svg';
import unity from '../../../assets/logos/unity-grey20181026.svg';

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
      <h2>Platforms</h2>
      <Grid>
        <Item key={0} as="a" href="https://ethereum.org/en/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={ethereum} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://www.blockstack.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={blockstack} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://aragon.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={aragon} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://decentraland.org/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={decentraland} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://enjin.io/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={enjin} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
        <Item key={1} as="a" href="https://unity.com/" target="_blank" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Thumbnail>
              <img src={unity} alt="I’m John and I’m a JAMStack engineer!" />
            </Thumbnail>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
