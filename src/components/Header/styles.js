import styled from 'styled-components'
//${props => `${props.fontSize}px`}

export const HeaderContent = styled.section`
    
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    @media only screen and (min-width: 631px) {
        h1{
            text-align: center;
            padding-top: 30px;
            font-size: ${props => `${props.fontSize}em`};
        }
    }
    @media only screen and (max-width: 631px) {
        h1{
            font-size: ${props => `${props.fontSizeSmall}em`};
        }
    }
    
    h1{ 
        color: white;
    }
`;