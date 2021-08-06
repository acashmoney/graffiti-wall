import React, { useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Form, Grid, Header, Image, Segment, Button } from 'semantic-ui-react';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function SignUpPage(props){

    const [error, setError ] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    });

    const history = useHistory();

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
      e.preventDefault();

      try {
        await userService.signup(state);
        props.handleSignUpOrLogin(); // gets the token from localstorage and updates the user state in our app.js
        // with the correct user object from the current token
        // then route to the homepage
        history.push('/');

      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }

    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' textAlign='center'>
                <Image src='https://image.flaticon.com/icons/png/512/3790/3790152.png' /> Sign Up
              </Header>            
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment stacked>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={ state.email}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input             
                      name="password"
                      type="password"
                      placeholder="password"
                      value={ state.password}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={ state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      className="btn"
                    >
                    Signup
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );   
    
}
