import React from 'react'
import './SidebarRow.css'

import { Avatar } from '@material-ui/core';

function SidebaRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {/* If there is a src pass in to Avatar */}
            {src && <Avatar src={src} />}
            {/* If there is icon pass in to Icon */}
            {Icon && <Icon />}
            <h4>{title}</h4>

        </div>
    )
}

export default SidebaRow
