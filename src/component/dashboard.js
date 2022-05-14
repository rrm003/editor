import './dashboard.css'

import React, { Component } from 'react';

import Body  from './body'
import LeftNav from './leftNav'
import RightNav from './rightNav'

class Dashboard extends Component {
    render() {
        return (
            <div className='App-body'>
                <LeftNav />
                <Body />
                <RightNav />
            </div>
        );
    }
}

export default Dashboard;