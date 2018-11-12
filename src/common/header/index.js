import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addtion } from './styled'

export default class MHeader extends Component {
	render() {
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className='left'><i className='iconfont'>&#xe6bc;</i>首页</NavItem>
					<NavItem className='left download'><i className='iconfont'>&#xe652;</i>下载APP</NavItem>
					<NavItem className='right'>Aa</NavItem>
					<NavItem className='right'>登录</NavItem>
					<SearchWrapper>
						<NavSearch></NavSearch>
						<i className='iconfont'>&#xe600;</i>
					</SearchWrapper>
				</Nav>
				<Addtion>
					<a className='reg'>注册</a>
					<a className='writing'><i className='iconfont'>&#xe603;</i>写文章</a>
				</Addtion>
			</HeaderWrapper>
		)
	}
}