import React, { Component } from 'react'; 
import Header from './Header';

class Page extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <p>I'm everywhere all at once.</p>
            </div>
        )//end return
    }//end render
}//end Page class

export default Page;
