import React, {useEffect, useState} from 'react';
// import {Button, ButtonToolbar, FlexboxGrid, Form, Panel} from 'rsuite';
// import {useLogin, useNotify} from "ra-core";
import {Notification, useAuthState, useLogin} from "react-admin";
import OAuth2Login from "react-simple-oauth2-login";
import {useRouter} from "next/router";
import {Button} from "@mui/material";
import styles from "../src/scss/Login.module.scss";
import {$server} from "../src/http";


const LoginPage = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const login = useLogin();
    // const { isLoading, authenticated } = useAuthState()

    // const notify = useNotify();
    // const submit = (e) => {
    //     e.preventDefault();
    //     login({ email, password }).catch((e) => {
    //         console.log(e || 'Invalid email or password');
    //         notify(e || 'Invalid email or password')
    //     });
    // };

    const router = useRouter();

    useEffect(() => {
        console.log(router.query.code)

        const {code, state} = router.query

        if(code) {
            $server.post('oauth/token', {
                grant_type: 'authorization_code',
                client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
                client_secret: process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
                redirect_uri: process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI,
                code,
            }).then(rs => {
                const { access_token, refresh_token } = rs.data
                console.log(rs.data)
                // login({access_token, refresh_token})
            })
        }
    }, [router.query])

    // const [state, setState] = useState()

    // const getState = () => {
    //     let state = localStorage.getItem('state')
    //
    //     if(!state) {
    //         state = randomstring.generate()
    //
    //         localStorage.setItem('state', state);
    //     }
    //
    //     return state;
    // }

    // const onSuccess = (data) => {
    //     login(data.code).catch((e) => {
    //         notify(e || 'Invalid email or password')
    //     });
    // }

    // useEffect(() => {
    //     setState(getState())
    //
    //     store.setUser(JSON.parse(localStorage.getItem('user')))
    //
    //     if (store.user) {
    //         router.push('/');
    //     }
    // }, [store.user])

    const handleAuth = () => {
        const state = 'hello';
        const query = new URLSearchParams({
            client_id: process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID,
            redirect_uri: process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI,
            response_type: "code",
            scope: "",
            state,
        }).toString();

        window.location.replace(process.env.NEXT_PUBLIC_API_ORIGIN_URL + '/oauth/authorize?' + query)
    }

    const onSuccess = (rs) => {
        console.log(rs)
    }
    console.log(process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI, process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID)
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
                <OAuth2Login
                    authorizationUrl={process.env.NEXT_PUBLIC_API_ORIGIN_URL + "/oauth/authorize"}
                    responseType="code"
                    isCrossOrigin={true}
                    clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
                    redirectUri={process.env.NEXT_PUBLIC_OAUTH_CLIENT_REDIRECT_URI}
                    onSuccess={onSuccess}
                    onFailure={(rs) => console.error(rs)}
                    state={''}
                    render={({onClick}) => <Button onClick={onClick}>Авторизоваться</Button>}
                />
                {/*<Button disabled={isLoading} onClick={handleAuth}>Авторизоваться</Button>*/}
            </div>
        </div>
        // <FlexboxGrid justify="center" className="login-wrapper">
        //     <Panel header="Вход" shaded>
        //         <OAuth2Login
        //             authorizationUrl={process.env.REACT_APP_API_ORIGIN_URL + "/oauth/authorize"}
        //             responseType="code"
        //             clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
        //             redirectUri={process.env.REACT_APP_OAUTH_CLIENT_REDIRECT_URI}
        //             onSuccess={onSuccess}
        //             onFailure={(rs) => console.log(rs)}
        //             state={state}
        //             render={({onClick}) => <Button onClick={onClick} colorScheme={'blue'}>Авторизация</Button>}
        //         />
        //         {/*<Form>*/}
        //         {/*    <Form.Group controlId="email">*/}
        //         {/*        <Form.ControlLabel>Email</Form.ControlLabel>*/}
        //         {/*        <Form.Control value={email} onChange={value => setEmail(value)} name="email" type="email" />*/}
        //         {/*    </Form.Group>*/}
        //         {/*    <Form.Group controlId="password">*/}
        //         {/*        <Form.ControlLabel>Password</Form.ControlLabel>*/}
        //         {/*        <Form.Control value={password} onChange={value => setPassword(value)} name="password" type="password" autoComplete="off" />*/}
        //         {/*    </Form.Group>*/}
        //         {/*    <Form.Group>*/}
        //         {/*        <ButtonToolbar>*/}
        //         {/*            <Button onClick={submit} appearance="primary">Submit</Button>*/}
        //         {/*            <Button appearance="default">Cancel</Button>*/}
        //         {/*        </ButtonToolbar>*/}
        //         {/*    </Form.Group>*/}
        //         {/*</Form>*/}
        //     </Panel>
        //     <Notification />
        // </FlexboxGrid>
    );
};

export default LoginPage;