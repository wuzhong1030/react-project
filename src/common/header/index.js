import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addtion } from './styled'

export default class MHeader extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left'>发现</NavItem>
                    <NavItem className='left'>关注</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addtion>
                    <a className='reg'>注册</a>
                    <a className='writing'>写文章</a>
                </Addtion>
            </HeaderWrapper>
        )
    }
}