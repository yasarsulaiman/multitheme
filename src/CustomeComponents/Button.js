import styled from 'styled-components'


const Button = styled.a`
    display: inline-block;
    border-radius: 4px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: ${props => props.theme.palette.common.color};
    border: 2px solid white;
    background: ${props => props.theme.palette.primary.main};
    text-align:center;
    margin-bottom:20px;
    margin-left: 0;
}
`

export default Button;