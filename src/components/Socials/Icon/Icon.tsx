import { icons } from "./icons"

import { Socials } from "../types"

export type Props = {
  name: Socials
  fill?: string
}

function CustomIcon({ name }: Props) {
  const IconComponent = icons[name]

  if (IconComponent) {
    return <IconComponent />
  }
  return <span>{name.charAt(0)}</span>
}

export function Icon({ name }: Props) {
  return (
    <span className='icon-wrapper' >
      <CustomIcon name={name} />
    </span>
  )
}
