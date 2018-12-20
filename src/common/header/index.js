import React from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addtion
} from "./styled";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MHeader = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left">
          <i className="iconfont">&#xe6bc;</i>首页
        </NavItem>
        <NavItem className="left download">
          <i className="iconfont">&#xe652;</i>下载APP
        </NavItem>
        <NavItem className="right">Aa</NavItem>
        <NavItem className="right">
          <Link to={{ pathname: "/login" }}>登录</Link>
        </NavItem>
        <SearchWrapper>
          <NavSearch
            className={props.focused ? "focused" : ""}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          />
          <i className={props.focused ? "iconfont focused" : "iconfont"}>
            &#xe600;
          </i>
        </SearchWrapper>
      </Nav>
      <Addtion>
        <a className="reg">注册</a>
        <a className="writing">
          <i className="iconfont">&#xe603;</i>写文章
        </a>
      </Addtion>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: "search_blur"
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MHeader);
