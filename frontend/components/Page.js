import React, { Component } from 'react'; 
import Header from '../components/Header';
import Meta from './Meta';
import styled from 'styled-components'; 

const MyButton = styled.button`
    background: red;
    font-size: 100px;
`; 

class Page extends Component { 
    render() {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton>Click me, you fool.</MyButton>
                {this.props.children} 
            </div>
        )//end return
    }//end render
}//end Page class

export default Page;
