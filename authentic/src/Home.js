import React, { Component } from 'react';
import fire from './Fire';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
           
            <div>    
            Welcome to Home
               Logout
               </div>
           );

    }

}
