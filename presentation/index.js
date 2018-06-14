// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Layout,
  Base,
  Fit,
  Fill
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            OSX Productivity and You
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            Teeps and Treecks 🤔
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Oh My ZSH</Heading>
          <Text size={6} textColor="secondary">Making your life in the terminal easier</Text>
          <CodePane textSize={24} padding="36px 0" source="$ brew install zsh zsh-completions"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">ChunkWM</Heading>
          <Text size={6} textColor="tertiary">A systematic approach to window management</Text>
          <CodePane theme='light' textSize={24} padding="36px 0" source={`
            $ brew tap crisidev/homebrew-chunkwm
            $ brew install chunkwm
            $ brew services enable chunkwm
          `}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">SKHD</Heading>
          <Text size={6} textColor="tertiary">Some like it hot(keys)</Text>
          <CodePane textSize={24} padding="36px 0" source={`
            $ brew install koekeishiya/formulae/skhd
            $ brew services enable skhd
          `}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Karabiner</Heading>
          <Text size={6} textColor="tertiary">Because Microsoft owns your muscle memory</Text>
          <CodePane theme='light' textSize={24} padding="36px 0" source={`
            $ brew cask install karabiner
            $ brew services enable karabiner
          `}/>
        </Slide>
        <Slide align='flex-start' transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} fill caps lineHeight={1} textColor="primary">
            Integrated Development Environments (IDE)
          </Heading>
          <Text margin="10px 0 48px" textColor="secondary" size={1} bold>
            Look, I'm helping!
          </Text>
          <iframe width="1020" height="630" src="https://www.youtube.com/embed/1LW__eE7-BA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fill caps lineHeight={1} textColor="secondary">
            Possible Plugins
          </Heading>
          <List>
            <ListItem>Git Diff</ListItem>
            <ListItem>Git Blame</ListItem>
            <ListItem>Linting</ListItem>
            <ListItem>Themes</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}