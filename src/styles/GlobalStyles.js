import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
${normalize}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing : border-box;

}
html {
	height: 100%;
}

body {
  background-color : ${(props) => props.theme.black};
  color : ${(props) => props.theme.white};
  font-family: 'Outfit', sans-serif;
	min-height: 100%;
	padding-top : 32px;
	
}

h2 {
	font-weight : 200;
	margin-bottom : 16px;
	font-size : 22px;
	
}
`
