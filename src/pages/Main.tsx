import { MenuSelector, SocialNetworks, Download, Telegram } from "../components"

import photo from '../assets/photo2.svg'

import './styles.css'

export const Main = () => {

  return (
    <div className="container">
      <div className='block-first'>
        <div className='name-container'>
          <div className="line"></div>
          <h4>Aia</h4>
          <h1>Kostiv</h1>
          <span>front-end developer</span>
        </div>
        <div className="img-container">
          <img src={photo} alt="person" />
        </div>
      </div>
      <div className='block-second'>
        <MenuSelector/>
        <div className="links-container">
          <div className="link">
            <Download/>
            <span>resume</span>
          </div>
          <div className="link">
            <Telegram/>
            <span>telegram</span>
          </div>
        </div>
      </div>
      <SocialNetworks />
    </div>
  )
}