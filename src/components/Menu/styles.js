import { Col } from 'antd';
import styled from 'styled-components';

export const MenuWrapper = styled(Col)`
    position: absolute;
    z-index: 3;
    width: 100%;
    background-color: #f5f5f5;
    min-height: 100vh;
    & .MenuItemGroup {
        display: flex;
        margin: 80px 0;
    }
    &[data-collapsed=true] {
        width: 10%;
        position: relative;
    }
    & .MenuItemExit {
            display: flex;
            & a {
                margin: auto;
                & .ant-btn {
                    background-color: transparent;
                    border-radius: 50px;
                    border: none; 
                }
            }
        }
    @media screen and (min-width:  576px) {
        position: relative;
        & .MenuItemGroup {
            flex-direction: column;
            margin: 0;
        }
    }
`;