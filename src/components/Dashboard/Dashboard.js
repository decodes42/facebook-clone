import React from 'react'

import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Feed from './Feed/Feed'
import Widgets from './Widgets/Widgets'

function Dashboard() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Dashboard
