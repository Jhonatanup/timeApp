import styled from 'styled-components'

export const DisplayContainer = styled.section`
    position: relative;
    background-color: #FEF2E4;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 5px;
    margin-bottom: 15px;
    color: #505050;

    button{
        position: absolute;
        border: none;
        background: none;
        right: 2%;
    }
    .infoNow{
        display: relative;
        margin-left: 10%;
    }
    ul{
        padding-inline-start: 0;
    }
    .city{
        font-weight: 800;
        font-size: medium;
        margin-bottom: 20px;
    }
    .temp{
        font-weight: 800;
        font-size: 2.75em;
        margin-top: 0;
        margin-bottom: 0;
    }
    .info{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        font-weight: 280;
    }
    .nextDays{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        font-weight: 800;
        font-size: medium;
        line-height: 30px;
    }
    .nextDays li{
        margin:auto;
    }
    .nextDays .orangeLetter{
        color: #F89B31;
    }
    li{
        list-style: none;
    }
    hr{
        width: 90%;
        margin-right: auto;
        margin-left: auto;
        border-style: solid;
        border-color: #F89B31;
        opacity: 0.7;
    }
`;