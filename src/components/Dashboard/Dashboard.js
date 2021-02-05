import React from 'react'
import { Button} from '@material-ui/core'
import Header from './Header/Header'
import Feed from './Feed/Feed'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'

function Dashboard() {
    const logOut = () => {

    }
    return (
        <div className='dashboard'>



            <Button onClick={this.logOut}>Log Out</Button>
        </div>
    )
}

export default Dashboard
