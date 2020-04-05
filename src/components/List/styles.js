import styled from 'styled-components';

export const Capitais = styled.section`
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    max-width: 800;

    @media only screen and (max-width: 631px) {
        .hideMinMax{
            display: none;
        }

    }

    @media only screen and (min-width: 631px) {
        padding-left: 150px;
    }


    h1{
        color: white;
        font-size: 2em;
        margin-bottom: 0;
    }
    ul{
        margin-top: 0;
        display: grid;
        list-style: none;
        margin-left: -35px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    .minmax, .hideMinMax{
        font-weight: 100;
        line-height: 40px;
        font-size: small;
    }
    li{
        font-weight: 800;
        font-size: medium;
        line-height: 40px;
    }
`;
