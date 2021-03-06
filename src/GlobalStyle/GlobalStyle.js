import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');

    * {
        box-sizing: border-box;
    }

    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
    */

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
        font-family: 'Lexend Deca', sans-serif;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: 'Lexend Deca', sans-serif;
        background-color: #ffffff;
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
    button {
        border: none;
    }

    ::-webkit-input-placeholder {
        font-size: 19.98px;
        color: #DBDBDB;
    }

    :-moz-placeholder {
        font-size: 19.98px;
        color: #DBDBDB; 
    }

    ::-moz-placeholder {  
        font-size: 19.98px;
        color: #DBDBDB;  
    }

    :-ms-input-placeholder {  
        font-size: 19.98px;
        color: #DBDBDB;  
    }


`;

export default GlobalStyle;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    h6 {
        color: #52B6FF;
        font-size: 13.98px;
    }
    span {
        font-style: italic;
        width: 303px;
        color: red;
        padding-left: 3px;

        display: ${props => props.valid === null ? "none" : props.valid === true ? "none" : "block"}
    }
`;


export const Logotype = styled.img`
    width: 180px;
    height: 178.38px;
    margin-top: 68px;
    margin-bottom: 32.62px;
`;

export const Input = styled.input`
    width: 303px;
    height: 45px;
    margin-bottom: 6px;
    padding-left: 11px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    background-color: #52B6FF;
    font-size: 20.98px;
    color: #FFFFFF;
`;