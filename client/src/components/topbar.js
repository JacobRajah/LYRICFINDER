import React, { Component } from 'react';
import './topbar.css'

class TopBar extends Component {
    render (){
        return (
            <div className="Nav">
                <h1 className="WebName">LYRIC FYNDER</h1>
                <h1 className="Redirects">SEARCH</h1>
                <h1 className="Redirects">TOP CHARTS</h1>
                <h1 className="Redirects">TRENDING</h1>
                <h1 className="Redirects">ABOUT</h1>
            </div>
        )};
}

export default TopBar