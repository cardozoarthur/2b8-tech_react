import styled from 'styled-components';

import Virus from '../../assets/virus.png';
import Logo from '../../assets/Logo.png';

export const SigninWrapper = styled.div`
    & #signin-virus {
        margin-bottom: 20px;
        background-image: url('${Virus}');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 200px;
        height: 200px;
    }
    & #signin-logo {
        margin: auto;
        margin-top: 50px;
        background-image: url('${Logo}');
        background-repeat: no-repeat;
        background-size: 100%;
        width: 100px;
        height: 50px;
    }
`;

export const FormWrapper = styled.div`
    max-width: 80%;

    & #signin-doc, #signin-pass {
        margin-bottom: 15px;
        border-radius: 50px;
    }

    & #signin-doc {
        width: 100%;
    }

    & #form {
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }

    & .ant-btn {
        border-radius: 50px;
        border: none;
        margin: auto;

        &:not(.ant-btn-primary) {
            background-color: transparent;
        }
    }
`;