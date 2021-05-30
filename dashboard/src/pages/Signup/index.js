import React, { useEffect, useState } from 'react';
import {Row, Col} from 'antd';
import { Input } from 'antd';
import InputMask from 'react-input-mask';
import { Button } from 'antd';
import { FormWrapper, SigninWrapper } from './signup.styles';
import User from '../../helpers/User';




export default function Signin() {
    const [doc, setDoc] = useState(null);
    const [age, setAge] = useState(null);
    const [cep, setCep] = useState(null);
    const [city, setCity] = useState(null);
    const [district, setDistrict] = useState(null);
    const [pass, setPass] = useState(null);
    const [testPass, setTestPass] = useState(null);

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
    const onInputChange = (e, cb=(value)=>{}) => {
        cb(e.target.value);
    };

    return (
        <SigninWrapper>
            <Row style={{width: '100vw', height: '100vh'}}>
                <Col style={{backgroundColor: 'blue', width: '100%', height: '100%'}} xs={0} sm={0} md={18}>
                    
                </Col>
                <Col style={{backgroundColor: 'white', width: '100%', height: '100%', position: 'relative'}} xs={24} sm={24} md={6}>
                    <FormWrapper>
                        <div id="form" >
                            <label for="signin-doc">
                                <span>Insira seu cpf</span>
                                <InputMask className="form-input" id="signin-doc" value={doc} onChange={onDocChange} mask="999.999.999-99" maskPlaceholder="" />
                            </label>
                            <br />
                            <label for="signin-age">
                                <span>Insira sua idade</span>
                                <InputMask className="form-input" id="signin-age" value={age} onChange={(e) => onInputChange(e, setAge)} mask="999" maskPlaceholder="" />
                            </label>
                            <br />
                            <label for="signin-city">
                                <span>Insira seu CEP</span>
                                <InputMask className="form-input" id="signin-cep" value={cep} onChange={(e) => onInputChange(e, setCep)} mask="99999-999" maskPlaceholder="" />
                            </label>
                            <br />
                            <label for="signin-city">
                                <span>Insira sua cidade</span>
                                <Input className="form-input" id="signin-city" value={city} onChange={(e) => onInputChange(e, setCity)} mask="999.999.999-99" maskPlaceholder="" />
                            </label>
                            <br />
                            <label for="signin-district">
                                <span>Insira seu bairro</span>
                                <Input className="form-input" id="signin-district" value={district} onChange={(e) => onInputChange(e, setDistrict)} mask="999.999.999-99" maskPlaceholder="" />
                            </label>
                            <br />
                            <label for="signin-pass">
                                <span>Insira sua senha</span>
                                <Input className="form-input" id="signin-pass" value={pass} onChange={onPassChange} type="password" placehoder="Senha" />
                            </label>
                            <br />
                            <label for="signin-pass-test">
                                <span>Insira novamente sua senha</span>
                                <Input className="form-input" id="signin-pass-test" value={testPass} onChange={(e) => onInputChange(e, setTestPass)} type="password" placehoder="Senha" />
                            </label>
                            {pass && testPass && pass !== '' && testPass !== '' && pass !== testPass && <span style={{color: 'red'}}>Senhas não coincidem</span>}
                            <br />
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <Button disabled={pass && testPass && pass !== '' && testPass !== '' && pass !== testPass} type="primary" onClick={() => {User.signup({doc, age, cep, city, district, pass}, () => {window.location.pathname = '/signin'})}}>Finalizar</Button>
                            </div>
                            <div id="signin-logo" />
                        </div>
                    </FormWrapper>
                </Col>
            </Row>
        </SigninWrapper>
    );
};