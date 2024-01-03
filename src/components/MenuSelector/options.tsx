export enum Tabs {
  PROFILE = 'PROFILE',
  EXPERIENCE = 'EXPERIENCE',
  TECH_STACK = 'TECH_STACK'
}

export const options = [
  {
    icon: 'profile',
    value: Tabs.PROFILE,
    content: () => {
      return (
        <>
          Frontend Developer with three years experience. I specialize on React / Redux libraries.
          Recently I successfully completed two blockchain projects, which I keep maintaining.
          <br />
          I have great interpersonal skills, I'm reliable and value team spirit a lot. I also have good sense of humor.
          I am constantly improving myself. Passionate about creativity, learning and developing new skills.
          <br />
          My main goal is creating useful and safe tools for humans.
        </>
      )
    },
  },
  {
    icon: 'experience',
    value: Tabs.EXPERIENCE,
    content: () => {
      return (
        <>
          FRONTEND DEVELOPER / Apr. 2021 - now
          <br /><br />
          • web3 applications development<br />
          • creating reusable components<br />
          • integration of libraries, third-party APIs and other technologies such as: RainbowKit, Redux-persist, CodeMirror, Alchemy, Covalent, RTK Query and others<br />
          • code refactoring <br />
          • finding and fixing bugs<br />
          • writing test cases<br />
          • writing smart contracts (ERC20 token standard)<br />
          • creating layout<br />
          • add animations (React Spring and keyframes)<br />
          <br /><br /><br />
          ART COURATOR /  oct. 2017 - mar.2021
          <br /><br />
          • organization of the contemporary art exhibitions, crafting  the concept <br />
          • art deal closure<br />
          • supervision of artists<br />
          • art deal management<br />
          • creating and editing visual materials and designs<br />
        </>
      )
    },
  },
  {
    icon: 'techStack',
    value: Tabs.TECH_STACK,
    content: () => {
      return (
        <>
        • HTML<br />
        • CSS <br />
        • JavaScript<br />
        • Typescript<br />
        • React <br />
        • Redux (Redux Toolkit)<br />
        • Styled components<br />
        • GitHub<br />
        • Ethers, Viem<br />
        </>
      )
    },
  },
]