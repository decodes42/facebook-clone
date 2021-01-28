import React from 'react'
import SidebarRow from '../SidebarRow/SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title='pages' />
        <SidebarRow title='Friends' />
        <SidebarRow title='Messenger' />
        <SidebarRow title='Marketplace' />
        <SidebarRow title='Videos' />
        <SidebarRow title='Marketplace' />
        </div>
    )
}
 export default Sidebar;