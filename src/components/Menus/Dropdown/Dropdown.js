import React, { useEffect, useRef, useState } from "react";

import './Dropdown.scss'

const Dropdown = (props) => {
  const {ButtonIcon, buttonText, buttonTextClassName, menuOptions, MenuContent, position} = props
  const [isOpen, setOpen] = useState(false)
  const dropdown = useRef()
  
  useEffect(() => {
    console.log('listening for outside clicks')
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        console.log('clicked outside')
        setOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  return (
    <div className='dropdown' ref={dropdown}>
      <div className={`dropdown-button${isOpen ? ' dropdown-button--active' : ''}`} onClick={() => setOpen(!isOpen)}>
        <ButtonIcon />
        {buttonText ? <span className={buttonTextClassName}>{buttonText}</span> : null}
      </div>
      {isOpen ? <div className='dropdown-backdrop' onClick={() => setOpen(false)}></div> : null}
      {isOpen ?
      MenuContent ? <MenuContent/> :
      <div className={'dropdown-container'+ position?` dropdown-container--${position}`:null } >
        {menuOptions ? menuOptions.map((option, i) => (
          <p key={i}>{option}</p>
        )) : null }
      </div> : null }
    </div>
  )
}

export default Dropdown
