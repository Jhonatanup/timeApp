import styled from 'styled-components'

export const SearchContainer = styled.section`
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    input{
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 85%;
        height: 45px;
        font-size: large;
        padding-left: 15px;
    }
    .icon{
        position: absolute;
        right: 10%;
        top: 13%;
    }
    form{
        margin-bottom: 80px;
    }
    hr{
        color: white;
    }
`;