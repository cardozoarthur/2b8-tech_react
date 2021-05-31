import { Button, Col, Input, Row } from 'antd';
import React from 'react';
import Menu from '../../components/Menu';

export default function Form() {
    return (
        <Menu>
            <Row>
                <Col>
                    <label> Teve febre?
                        <Input />
                    </label>
                    <label> Teve Tosse?
                        <Input />
                    </label>
                    <label> Teve dor de garganta?
                        <Input />
                    </label>
                    <label> Teve dificuldade para respirar?
                        <Input />
                    </label>
                    <label> Teve dor de cabeça?
                        <Input />
                    </label>
                    <label> Teve dor no peito?
                        <Input />
                    </label>
                    <label> Teve nausea?
                        <Input />
                    </label>
                    <label> Teve coriza?
                        <Input />
                    </label>
                    <label> Teve fadiga?
                        <Input />
                    </label>
                    <label> Teve dor nos olhos?
                        <Input />
                    </label>
                    <label> Teve perda de sentidos?
                        <Input />
                    </label>
                    <label> Teve dor muscular?
                        <Input />
                    </label>
                    <Button>Enviar</Button>
                </Col>
            </Row>
        </Menu>
    )
}