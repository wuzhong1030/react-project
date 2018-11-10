import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    padding: 0 200px;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
`


export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    height: 58px;
    width: 100px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${logoPic});
`

export const Nav = styled.nav`
    height: 100%;
`

export const NavItem = styled.div`
    color: #333;
    line-height: 56px;
    font-size: 17px;
    padding: 0 14px;
    &.left {
        float: left;
        color: #969696;
    }
    &.right {
        float: right;
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    outline: none;
    border: none;
    border-radius: 19px;
    padding: 0 20px;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
`