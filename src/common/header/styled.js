import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  padding: 0 300px 0 200px;
  height: 58px;
  box-sizing: border-box;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
`;

export const Logo = styled.a.attrs({
  href: "/"
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
`;

export const Nav = styled.nav`
  height: 100%;
`;

export const NavItem = styled.div`
  color: #333;
  line-height: 56px;
  font-size: 17px;
  padding: 0 14px;
  &:hover {
    cursor: pointer;
  }
  .iconfont {
    margin-right: 5px;
  }
  &.left {
    float: left;
    color: #ea6f5a;
    &.download {
      color: #333;
    }
  }
  &.right {
    float: right;
    color: #969696;
    a {
      color: inherit;
      text-decoration: none;
      outline: none;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: 38px;
  margin-top: 9px;
  float: left;
  .iconfont {
    position: absolute;
    top: 50%;
    right: 10px;
    color: #999;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    transform: translateY(-50%);
    transition: all 0.6s ease;
    &.focused {
      background: #777;
      color: #fff;
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  width: 160px;
  height: 38px;
  margin-left: 20px;
  outline: none;
  border: none;
  border-radius: 19px;
  padding: 0 20px;
  background: #eee;
  font-size: 14px;
  transition: all 0.6s ease;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
`;

export const Addtion = styled.div`
  position: absolute;
  right: 30px;
  top: 0;
  height: 58px;
  line-height: 58px;
  a {
    display: inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    border: 1px solid rgba(236, 97, 73, 0.7);
    border-radius: 20px;
    font-size: 15px;
    text-align: center;
    &:hover {
      cursor: pointer;
    }
    &.reg {
      color: #ea6f5a;
      background-color: transparent;
    }
    &.writing {
      width: 100px;
      margin-left: 20px;
      color: #fff;
      background-color: #ea6f5a;
    }
  }
`;
