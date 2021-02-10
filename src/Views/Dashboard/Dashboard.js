import React from 'react'

import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'
import Widgets from '../../components/Widgets/Widgets'

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
