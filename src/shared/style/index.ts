import { createGlobalStyle } from 'styled-components'
import {
  COLORS,
  FONT_SIZES,
  FONT_FAMILIES,
  SPACINGS,
  BORDER_RADIUS,
} from './constants'

export const GlobalStyle = createGlobalStyle`
:root {
    font-size: ${FONT_SIZES.base};
    font-family: ${FONT_FAMILIES.inter};
    color: ${COLORS.white};
}

body {
    background: ${COLORS.black};
}

${SPACINGS.map(
  (spacing, index) => `
.m-${index} {
    margin: ${spacing}
}

.mt-${index} {
    margin-top: ${spacing}
}

.mb-${index} {
    margin-bottom: ${spacing}
}

.ml-${index} {
    margin-left: ${spacing}
}

.mr-${index} {
    margin-right: ${spacing}
}

.p-${index} {
    padding: ${spacing}
}

.pt-${index} {
    padding-top: ${spacing}
}

.pb-${index} {
    padding-bottom: ${spacing}
}

.pl-${index} {
    padding-left: ${spacing}
}

.pr-${index} {
    padding-right: ${spacing}
}
`
)}

${BORDER_RADIUS.map(
  (borderRadius, index) => `
  .br-${index} {
      border-radius: ${borderRadius}
  }
  `
)}

.f {
    display: flex;
}

.f-direction-column {
    flex-direction: column;
}

.f-jc-start {
    justify-content: flex-start;
}

.f-jc-center {
    justify-content: center;
}

.f-jc-end {
    justify-content: flex-end;
}

.f-jc-space-b {
    justify-content: space-between;
}

.f-ai-start {
    align-items: flex-start;
}

.f-ai-center {
    align-items: center;
}

.f-ai-end {
    align-items: flex-end;
}

.f-center {
    align-items: center;
    justify-content: center;
}

.f-js-start {
    justify-self: flex-start;
}

.f-js-center {
    ustify-self: center;
}

.f-js-end {
    justify-self: flex-end;
}

.f-as-start {
    align-self: flex-start;
}

.f-as-center {
    align-self: center;
}

.f-as-end {
    align-self: flex-end;
}

.f-wrap {
    flex-wrap: wrap;
}

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
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
