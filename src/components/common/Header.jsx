import React from 'react'

function Header(props) {
  return (
    <div className={props.bgClass}>
        <div class="text-content">
            <h1 class="header-title">{props.title}</h1>
            {props.children}
        </div>
    </div>
  )
}

export default Header