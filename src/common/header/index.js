import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch } from './styled'

export default class MHeader extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left'>发现</NavItem>
                    <NavItem className='left'>关注</NavItem>
                    <NavItem className='right'>消息</NavItem>
                    <NavItem className='right'>搜索</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
            </HeaderWrapper>
        )
    }
}