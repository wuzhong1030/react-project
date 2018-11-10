import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1541842572185'); /* IE9*/
    src: url('iconfont.eot?t=1541842572185#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('iconfont.ttf?t=1541842572185') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('iconfont.svg?t=1541842572185#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }

    .icon-zhinanzhen:before { content: "\e6bc"; }

    .icon-icons19:before { content: "\e652"; }

    .icon-sousuo:before { content: "\e600"; }

    .icon-feather-:before { content: "\e603"; }
`

