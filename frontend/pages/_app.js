 import App, { Container } from 'next/app';

 class MyApp extends App {
    render (){
        const { Component } = this.props;

        return(
            <Container>
                <p>I'm everywhere all at once.</p>
                <Component /> 
                 
            </Container>
        )
    }
 }

 export default MyApp; 