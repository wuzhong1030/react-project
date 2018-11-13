import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addtion } from './styled'

export default class MHeader extends Component {
	constructor(props) {
		super(props)
		this.state = {
			focused: false
		}
		this.handleInputFocus = this.handleInputFocus.bind(this)
		this.handleInputBlur = this.handleInputBlur.bind(this)
	}
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
						<NavSearch 
							className={this.state.focused ? 'focused': ''}
							onFocus={this.handleInputFocus}
							onBlur={this.handleInputBlur}
								></NavSearch>
						<i className={this.state.focused ? 'iconfont focused': 'iconfont'}>&#xe600;</i>
					</SearchWrapper>
				</Nav>
				<Addtion>
					<a className='reg'>注册</a>
					<a className='writing'><i className='iconfont'>&#xe603;</i>写文章</a>
				</Addtion>
			</HeaderWrapper>
		)
	}
	handleInputFocus() {
		this.setState({
			focused: true
		})
	}
	handleInputBlur() {
		this.setState({
			focused: false
		})
	}
}