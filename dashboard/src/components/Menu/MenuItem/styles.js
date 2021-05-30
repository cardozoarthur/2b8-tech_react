import styled from 'styled-components';

export const MenuItemWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
    & > a > div {
        display: flex;
        flex-direction: column;
        border-radius: 20px;
        background-color: #f1f1f1;
    }
    width: 50%;
    margin: 10px 0;
    @media screen and (min-width:  576px) {
        & > div {
            width: 80%;
            flex-direction: row;
            margin: 0 auto;
            border-radius: 20px;
            background-color: #f1f1f1;
            padding: 15px 5px;
        }
        margin: 10px 0;
        width: 100%;
    }
`;
export const IconWrapper = styled.div`
    width: 25px;
    height: 25px;
    background-image: url('${props => props.iconUri}');
    background-repeat: no-repeat;
    background-size: 100%;
    margin: auto;
    `;
export const TextWrapper = styled.div`
    margin-left: 10px;
    margin: auto;
    `;

export const TextParagraph = styled.p`
    text-align: end;
    width: max-content;
`;