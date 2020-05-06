import React, { Component } from 'react'; 
import Header from '../components/Header';
import Meta from './Meta';
import styled from 'styled-components'; 

const StyledPage = styled.div`
    background: lightblue;
    color: black;
`;

const Inner = styled.div`
    max-width: 1000px;  
    margin: 0 auto;
    padding: 2rem; 
    background: orangered;
`;

class Page extends Component { 
    render() {
        return (
            <StyledPage>
                <Meta />
                <Header />
                <Inner>{this.props.children}</Inner>
            </StyledPage>
        )//end return
    }//end render
}//end Page class

export default Page;
