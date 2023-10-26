import styled from "styled-components"


const ShowAnimate=styled.div`
  position: absolute;  top:${prop=>prop?.top??0}px;
  bottom:${prop=>prop?.bottom??0}px;
  left: ${prop=>prop?.left??0}px;
  right: ${prop=>prop?.right??0}px;

  background-color: var(--color-bg);
  margin: ${prop=>prop.direction=='center'?'auto':'none'};
  margin-left: ${prop=>prop.direction=='left'?'auto':'none'};
  z-index: -100000;
  animation: ${prop=>prop?.name??'shadow'} ${prop=>prop?.speed+'s'??'1s'} ease-in-out;
  animation-delay: ${prop=>prop?.delay+'s'??'0s'};
  @keyframes ${prop=>prop?.name??'shadow'} {
    from{width:100%;z-index: 20000;}
    to{width:0%;z-index: 1;}
  }

`

export {ShowAnimate}