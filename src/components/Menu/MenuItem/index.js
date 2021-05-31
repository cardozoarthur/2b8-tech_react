import { Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { IconWrapper, MenuItemWrapper, TextWrapper, TextParagraph } from './styles';

export default function MenuItem({iconUri, text, to="/"}) {
    return (
        <MenuItemWrapper>
            <Link to={to}>
                <Row justify="space-between">
                    <IconWrapper iconUri={iconUri} />
                    <TextWrapper><TextParagraph>{text}</TextParagraph></TextWrapper>
                </Row>
            </Link>
        </MenuItemWrapper>
    );
}