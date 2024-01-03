import { Icon } from "./Icon"

import { Socials } from "./types"

import './styles.css'

const socials = [
  { name: 'github' as Socials,
    label: 'github',
    link: 'https://github.com/chouchaX',
  },
  { name: 'linkedin' as Socials,
    label: 'linked In',
    link: 'https://www.linkedin.com/in/kostiv-aia-90ab31207/'
  },
  { name: 'email' as Socials,
    label: 'ayakostiv@gmail.com',
    link: 'mailto:ayakostiv@gmail.com',
  },
]

export const SocialNetworks = () => {

  return (
    <div className="social-container">
      { socials.map((elem) => {
        return (
          <div className="social-wrapper">
            <Icon name={elem.name}/>
            <a href={elem.link}>
              {elem.label}
            </a>
          </div>
        )
      })}
    </div>
  )
}