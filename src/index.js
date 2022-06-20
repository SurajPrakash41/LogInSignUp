import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import {AccountBox} from "../src/components/accountBox/App"
const AppContainer = styled.div `
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

ReactDom.render( 
    
       <AppContainer> <AccountBox /> </AppContainer>,
       document.getElementById('root'));