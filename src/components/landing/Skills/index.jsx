import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>What we do</h1>
          <p>
            Blockboard is a blockchain focused technology firm exploring with innovative technologies to build new
            systems, security and interactions. At Blockboard we focus on decentralized products and software in fields
            like DeFi, Gaming, Cybersecurity and Digital Identity. We support the adoption of Blockchain technology and
            make it possible for companies to integrate it.
          </p>
          {/* <Button as={AnchorLink} href="#contact">
            Hire me
          </Button> */}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
