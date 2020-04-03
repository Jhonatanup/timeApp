import styled from 'styled-components'
//${props => `${props.fontSize}px`}

export const HeaderContent = styled.section`
    
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    
    h1{
        font-size: ${props => `${props.fontSize}em`};
        color: white;
    }
`;

export const SmallerHeaderContent = styled(HeaderContent)`
    width: 100%;
    h1{
        font-size: 2em;
    }
`;