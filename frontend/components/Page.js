import React, { Component } from 'react'

class Page extends Component {
    render() {
        return (
            <div>
                <p>I'm the page component.</p>
                {this.props.children}
                <p>I'm everywhere all at once.</p>
            </div>
        )//end return
    }//end render
}//end Page class

export default Page;
