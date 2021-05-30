import { Col } from 'antd';
import styled from 'styled-components';

import virus from '../../../assets/virus.png'

export const Logo = styled.div`
    position: ${props => props.collapsed ? 'absolute' : 'relative'};
    top: 0;
    right: 0;
    background-image: url('${virus}');
    background-repeat: no-repeat;
    background-size: 100%;
    
    width: ${props => props.collapsed ? '25px' : '100px'};
    height: ${props => props.collapsed ? '25px' : '100px'};
    margin: ${props => props.collapsed ? '10px 3px 0 0' : '50px auto 20px'};
`;