import React, { useEffect, useState } from 'react';
import {Row, Col} from 'antd';
import { Input } from 'antd';
import InputMask from 'react-input-mask';
import { Button } from 'antd';
import { FormWrapper, SigninWrapper } from './signin.styles';
import { Link } from 'react-router-dom';
import User from '../../helpers/User';




export default function Signin() {
    const [doc, setDoc] = useState(null);
    const [pass, setPass] = useState(null);

    useEffect(() => {

    }, []);

    const onDocChange = (e) => {
        console.log(e);
        setDoc(e.target.value);
    };

    const onPassChange = (e) => {
        console.log(e);
        setPass(e.target.value);
    };

    return (
        <SigninWrapper>
            <Row style={{width: '100vw', height: '100vh'}}>
                <Col style={{backgroundColor: 'blue', width: '100%', height: '100%'}} xs={0} sm={0} md={18}>
                    
                </Col>
                <Col style={{backgroundColor: 'white', width: '100%', height: '100%', position: 'relative'}} xs={24} sm={24} md={6}>
                    <FormWrapper>
                        <div id="form" >
                            <div id="signin-virus" />
                            <label for="signin-doc">
                                <span>Insira seu cpf</span>
                                <InputMask id="signin-doc" value={doc} onChange={onDocChange} mask="999.999.999-99" maskPlaceholder="" />
                            </label>
                            <label for="signin-pass">
                                <span>Insira sua senha</span>
                                <Input id="signin-pass" value={pass} onChange={onPassChange} type="password" placehoder="Senha" />
                            </label>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <Button type="primary" onClick={() => User.signin({doc, pass}, () => {window.location.pathname = '/'})}>Entrar</Button>
                                <Link to="/signup"><Button>Criar conta</Button></Link>
                            </div>
                            <div id="signin-logo" />
                        </div>
                    </FormWrapper>
                </Col>
            </Row>
        </SigninWrapper>
    );
};