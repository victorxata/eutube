import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { Home } from '@material-ui/icons';
import { Whatshot } from '@material-ui/icons';
import { Subscriptions } from '@material-ui/icons';
import { VideoLibrary } from '@material-ui/icons';
import { History } from '@material-ui/icons';
import { OndemandVideo } from '@material-ui/icons';
import { WatchLater } from '@material-ui/icons';
import { ThumbUpOutlined } from '@material-ui/icons';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={Home} title="Home" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions} title="Subscription" />
            <hr /> 
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your Videos" />
            <SidebarRow Icon={WatchLater} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOutlined} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show More" />
       </div>
    )
   
}

export default Sidebar
