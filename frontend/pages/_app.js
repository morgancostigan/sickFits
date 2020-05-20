 import App, { Container } from 'next/app';
 import Page from '../components/Page'; 
 import { ApolloProvider } from 'react-apollo';
 import withData from '../lib/withData';
 

 class MyApp extends App {
    render (){
        const { Component } = this.props;

        return(
            <Container>
                <Page>
                    <Component /> 
                </Page>
            </Container>
        )//end return 
    } 
 }//end MyApp class

 export default MyApp; 