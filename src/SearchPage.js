import React from 'react'
import { TuneOutlined } from '@material-ui/icons';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
            image="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
            channel="Canal de Victor"
            verified
            subs="555K"
            noOfVideos={4334}
            description="Este es un canal de prueba de Victor"
            />
            <hr />

            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
            <VideoRow
                title="Paella en Sarten 8"
                views="2.3M"
                timestamp="3 days ago"
                channel="Victorxata"
                channelImage="https://yt3.ggpht.com/ytc/AKedOLQiHHbFw0eDeIjngCwq8aT4Xuor5tE037HzehZOoL8=s48-c-k-c0x00ffffff-no-rj"
                image="https://i9.ytimg.com/vi/ugzR_UZ_uZA/mqdefault.jpg?v=5e89fbaa&sqp=CJz0gooG&rs=AOn4CLCE6eBuQ221b8Q1Bwq2UvUXI2a9jg"
                subs="1M"
                description="Como hacer una paella con sarten en casa"
             />
        </div>
    )
}

export default SearchPage
