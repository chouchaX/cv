import download from '../../assets/download.svg'

import './styles.css'

export const Download = () => {
  return (
      <div className="download">
        <a href='resume.pdf' download='CV Aia Kostiv.pdf'>
          <img src={download} alt="download cv" />
        </a>
      </div>
  )
}