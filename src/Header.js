import React, { useState } from 'react';
import './Header.css';
import { MenuSharp } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Apps } from '@material-ui/icons';
import { Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <MenuSharp />
                <Link to="/">
                    <img
                        className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png" 
                        alt=""
                        />
                </Link>
            </div>
            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>
            </div>
            <div className="header__right">
                <VideoCallIcon className="header__icon" />
                <Apps className="header__icon" />
                <Notifications className="header__icon" />
                <Avatar 
                    alt="Victor"
                    src="https://secure.gravatar.com/blavatar/f0dd72d9af043240a5f0a15a40b02f9b?s=50&d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png"
                />
            </div>
        </div>
    )
}

export default Header
