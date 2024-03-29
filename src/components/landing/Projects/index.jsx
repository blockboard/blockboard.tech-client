import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card, TitleWrap } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Languages } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>NFT Art Collectibles</h4>
              <p>
                A Non-Fungible Tokens (NFT) project on top of Ethereum following ERC-721 standard with MetaMask login
                system, integrated with OpenSea marketplace.
              </p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>Javascript</span>
                  <span key={1}>Solidity</span>
                  <span key={2}>Shell</span>
                  <span key={1}>IPFS</span>
                  <span key={3}>OpenSea</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>Unity Game LL</h4>
              <p>A walkthrough game on blockchain exploring a real city under development.</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>Unity 3D</span>
                  <span key={1}>.netcore</span>
                  <span key={1}>C#</span>
                  <span key={1}>WebGl</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>CyberSecurity platform / Scanning Tool</h4>
              <p>
                Identify vulnerabilities in running containers, images, hosts, and repositories. Building a Back-end
                system with Golang, integrating multiple open-source tools for Cloud Cybersecurity.
              </p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>Go</span>
                  <span key={1}>ReactJS</span>
                  <span key={1}>NodeJS</span>
                  <span key={1}>Shell</span>
                  <span key={1}>Docker</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>Stampit</h4>
              <p>A decentralized application (DApp) for stamping artistic assets on Blockstack.</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>ReactJS</span>
                  <span key={1}>NodeJS</span>
                  <span key={1}>IPFS</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>Eth Token Generator</h4>
              <p>Simple tool to generate erc-20 tokens with several options.</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>Javascript</span>
                  <span key={1}>Solidity</span>
                  <span key={1}>Shell</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
        <Item key={0} as="p" rel="noopener noreferrer" theme={theme}>
          <Card theme={theme}>
            <Content>
              <h4>DeFi</h4>
              <p>Research oriented project towards finance on decentralized organizations.</p>
            </Content>
            <TitleWrap>
              <Stats theme={theme}>
                <Languages>
                  <span key={0}>Javascript</span>
                  <span key={1}>Solidity</span>
                  <span key={1}>Shell</span>
                </Languages>
              </Stats>
            </TitleWrap>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
