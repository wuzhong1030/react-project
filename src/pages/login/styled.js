import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 58px);
`

export const LoginForm = styled.div`
    width: 300px;
    height: 500px;
    background: #eee;
`

export const Input = styled.input.attrs({
    type: 'text'
})`
    width: 200px;
    height: 44px;
`