import React, { Component } from 'react'; 
import Header from '../components/Header';
import Meta from './Meta';

class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}
                <p>I'm everywhere all at once.</p>
            </div>
        )//end return
    }//end render
}//end Page class

export default Page;
