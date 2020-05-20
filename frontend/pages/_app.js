 import App, { Container } from 'next/app';
 import Page from '../components/Page'; 
 import { ApolloProvider } from 'react-apollo';
 import withData from '../lib/withData';


 class MyApp extends App {
    static async getInitialProps({ Component, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps ) {
            pageProps = Component.getInitialProps(ctx);
        }
        // vvv this exposes the query to the user vvv
        pageProps.query = ctx.query;
    }
    render (){
        const { Component, apollo } = this.props;

        return(
            <Container>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component />
                    </Page>
                </ApolloProvider>
            </Container>
        )//end return 
    } 
 }//end MyApp class

 export default withData(MyApp); 