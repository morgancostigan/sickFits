import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from '../components/Header';
import Meta from './Meta';


const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightGrey: '#E1E1E1',
    lightBlue: '#dcf8fc',
    offwhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};//end theme, these are strings rather than true css 

const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};  
    margin: 0 auto;
    padding: 2rem; 
    background: ${props => props.theme.lightgrey};
`;

injectGlobal`
    @font-face {
        font-family: 'radnika_next' ;
        src: url('/static/radnikanext-medium-webfont.woff2')
            format('woff2');
        font-weight: normal; 
        font-style: normal;  
    }
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *, *:before, *:after {
        box-sizing: inherit;  
    }
    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem; 
        line-height: 2;
        font-family: 'radnika_next' ;
    }
    button {
    font-family: 'radnika_next' !important;
    color: ${theme.black};
    }
    a {
        text-decoration: none;
        color: ${theme.black};  /* this is outside the ThemeProvider, hence no props  */
    }
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        )//end return
    }//end render
}//end Page class

export default Page;
