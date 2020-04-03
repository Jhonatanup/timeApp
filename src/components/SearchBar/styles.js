import styled from 'styled-components'

export const SearchContainer = styled.section`
    position: relative;
    width: 100%;
    max-width: 565px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    input{
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 85%;
        height: 40px;
        font-size: large;
        padding-left: 15px;
    }
    .icon{
        position: absolute;
        right: ${props => `${props.right}%`};
        top: ${props => `${props.top}%`};
    }
    form{
        margin-bottom: ${props => `${props.marginBottom}px`}
    }
    hr{
        border-style: solid;
        border-color: white;
        opacity: 0.7;
    }
`;