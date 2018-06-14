// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Link,
  Image,
  Layout,
  Appear,
  S
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
        <Slide align="flex-top" transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">Everybody, Everybody</Heading>
          <Text padding="0 0 10vh 0" size={12} textColor="tertiary">We're all special snowflakes with our own workflow, please jump in a let us know how you do it!</Text>
          <Appear>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RpKuXgCeJMA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">Oh My ZSH</Heading>
          <Text size={6} textColor="secondary">Making your life in the terminal easier</Text>
          <CodePane textSize={24} padding="36px 0" source="$ brew install zsh zsh-completions"/>
          <Link href="http://ohmyz.sh/" textColor="secondary">http://ohmyz.sh/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">ChunkWM</Heading>
          <Text size={6} textColor="tertiary">A systematic approach to window management</Text>
          <CodePane theme="light" textSize={24} padding="36px 0" source={`
            $ brew tap crisidev/homebrew-chunkwm
            $ brew install chunkwm
            $ brew services enable chunkwm
          `}
          />
          <Link textColor="primary" href="https://koekeishiya.github.io/chunkwm/">https://koekeishiya.github.io/chunkwm/</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary">SKHD</Heading>
          <Text size={6} textColor="tertiary">Some like it hot(keys)</Text>
          <CodePane textSize={24} padding="36px 0" source={`
            $ brew install koekeishiya/formulae/skhd
            $ brew services enable skhd
          `}
          />
          <Link textColor="secondary" href="https://github.com/koekeishiya/skhd">https://github.com/koekeishiya/skhd</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} textColor="primary">Karabiner</Heading>
          <Text size={6} textColor="tertiary">Because Microsoft owns <S type="strikethrough">your</S> my muscle memory</Text>
          <CodePane theme="light" textSize={24} padding="36px 0" source={`
            $ brew cask install karabiner
            $ brew services enable karabiner
          `}
          />
          <Link textColor="primary" href="https://pqrs.org/osx/karabiner/document.html">https://pqrs.org/osx/karabiner/document.html</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">LICEcap</Heading>
          <Text size={6} textColor="secondary">Ooo Shiny</Text>
          <CodePane theme="dark" textSize={24} padding="36px 0" source={`
            $ brew cask install licecap
          `}
          />
          <Link href="https://www.cockos.com/licecap/" textColor="tertiary">https://www.cockos.com/licecap/</Link>
        </Slide>
        <Slide align="flex-start" transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} fill caps lineHeight={1} textColor="primary">
            Integrated Development Environments (IDE)
          </Heading>
          <Text margin="10px 0 10vh" textColor="secondary" size={1} bold>
            Look, I'm helping!
          </Text>
          <Appear>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/1LW__eE7-BA" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
          </Appear>
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} fill caps lineHeight={1} textColor="secondary">
            Git Git Git
          </Heading>
          <Link href="https://jira.cancerlinq.org/wiki/display/DEV/GitHub">https://jira.cancerlinq.org/wiki/display/DEV/GitHub</Link>
        </Slide>
        <Slide align="flex-top" transition={["fade"]} bgColor="primary">
          <Heading padding="0 0 10vh 0" size={1} textColor="secondary">What are YOUR favorite tools?</Heading>
          <Appear>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Pw9gaEiQAxY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary">Pet Tax</Heading>
          <Layout fit>
            <Image width="30vw" height="70vh" margin="0 5vh 0 -5vh" src="https://lh3.googleusercontent.com/ntIRyk7ufSVqCTlBGL9q_TS3QNNw1qzJ-Inlyv--1yvrcXRr3Ng5Vzjd1XjoJureBO5kVT2ASCA6S0pXLW2V1rRF2Izc-qaTRhcLnY0gyu5rVowOqAXQiSasSYH20t8VgBj7q-XxZTXibBZ51JEB40dRCEw9WOUgunPP5Rpfi5VKna0fL4jSW5mKcPth8oyb9afx3med0mfkhI_Z-cwj0936DhZyf2h8lHGzz9aAv4iAatZervDYuoofL72ntmZN96IqCEgTLDe2fXKhf5yF3vVJR9QqjbV045OnAA-0qlq1QhRLB-7CyoaAZ1Uign-b0No-3DWuBajOpZqNcU9QsQZK4-m-Rs2_NuoNTBrGJLzVpbm2OMNrNsRIzOgNE45W3fNcRWn9E9wF-x3fl9dl6K7Hi1P4yYSNM-vEd3pdgYklpaQfe-i_ZkfvwCCqq4YxNifpf6BoooD9MXN8BUQ_hVVsqX5rabl55AMWN-PoSeq-nIg_4YVc4sD2CnwkHgdG4G2M4s1kP48W-NQDB4jzJ_gXQvbIkW1LSwXfm1J0PunHrTBCsn-NLuyG4_YR5IFL=w2880-h1562" />
            <Image width="30vw" height="70vh" margin="0 0 0 5vh" src="https://lh3.googleusercontent.com/dPP5CWLNDJeTFtFw8vveA5-8ID5LoD01j59ajiuse960w6WVvFAQNbAa5tqTb3nnMJq2gGOHwq1Ey4MP3HFKqDyOQClPQ8RBAtIF-i3Co8ckCU8Vxeq1nXux3ZKRMEY94WKFIitTXavVQBQtlZarWwbgcwjik-paqE2ouu8Q-uhUddoyfkQFZxd5JkvY4IDUp7WwGfF_hPms9lvcp1B8lIyCOYW20wxPVu7D_Us6v5r8-Bvnu8xXP8eBbEokKmzSnd7K6VXC_fLp1OE6IR92d76WzdA3K_-HuBxJUgos_02u4URVZhx0-Y1yKtosCxCbgoAn-dMMbuQ7P3taLdyHBx-XXwjWMsvrolLnczspvIGrCltgykqs8N68a8ZTTAPoaXnii3Dj9lCHgvXhFy9vE-hzj9rnizCqVW_FrEus0Fkxvt6zlRYNr9KAl8gz_rb22J1Oq97Hl2HNVA1QfwTMIoydVVQEvw-UUZ34ZdI4KGBh_r95lEDhJV3eBfvXPVi08MijH7y0dDtlshi02p53mwzh1Vrz_WqYPQD6U8yJmpbRsMfzk5nyo16xm-mIhORz=w2880-h1562" />
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
