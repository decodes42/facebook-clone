import React from "react"
import './Header.css';
import { useStateValue } from '../../StateProvider'
import Toggle from './Toggle/Toggle'

// Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


import { Avatar, Button } from '@material-ui/core';
// import { set } from "mongoose";

function Header() {
    // const [{user}, dispatch] = useStateValue()
    // const [open, setOpen] = useStateValue(false);

    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Logo"/>
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder='Search Site' type="text" />
                </div>
            </div>
            <div className="header__center">
                <Button className="header__option header__option--active"
                >
                    <HomeIcon fontSize='large' />
                </Button>
                <Button className="header__option">
                    <FlagIcon  fontSize='large'/>
                </Button>
                <Button className="header__option">
                    <SubscriptionsIcon  fontSize='large'/>
                </Button>
                <Button className="header__option">
                    <StorefrontIcon fontSize='large'/>
                </Button>
                <Button className="header__option">
                    <SupervisedUserCircleIcon fontSize='large' />
                </Button>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>

                    <Toggle />
                </div>

                <Button className='header__right__btn'>
                    <ForumIcon />
                </Button>
                <Button className='header__right__btn'>
                    <NotificationsActiveIcon />
                </Button>




            </div>
        </div>
    );
}

export default Header;