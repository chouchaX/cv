import { ChangeEvent, useMemo, useState } from 'react'

import { Tabs, options } from './options'

import './styles.css'

export function MenuSelector() {

  const [tab, setTab] = useState(Tabs.PROFILE)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTab(e.target.value as Tabs)
  }

  const activeTab = useMemo(() => {
    const activeTab = options.find((option) => option.value === tab)
    return activeTab?.content()
  }, [tab])
  
  return (
    <div className='menu-container'>
        <div className='menu-wrapper'>
          {options.map((option) => (
            <label className='tabs' key={option.value} htmlFor={option.value} >
              <input
                className='radio'
                type='radio'
                id={option.value}
                name={option.value}
                value={option.value}
                onChange={handleChange}
                checked={tab === option.value}
              />
              <div id='option'>
                {option.value}
              </div>

            </label>
          ))}
        </div>
        {activeTab && activeTab}
    </div>
  )
}
