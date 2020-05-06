import React, { Component } from 'react'; 
import Header from '../components/Header';
import Meta from './Meta';
import styled,  { ThemeProvider, injectGlobal } from 'styled-components';


const theme = {
     red: '#FF0000',
     black: '#393939',
     grey: '#3A3A3A',
     lightgrey: '#E1E1E1',
     lightblue: '#dcf8fc',
     offwhite: '#EDEDED',
     maxWidth: '1000px',
     bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};//end theme, these are strings rather than true css 

const StyledPage = styled.div`
    background: ${props => props.theme.lightblue};
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};  
    margin: 0 auto;
    padding: 2rem; 
    background: ${props => props.theme.lightgrey};
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
