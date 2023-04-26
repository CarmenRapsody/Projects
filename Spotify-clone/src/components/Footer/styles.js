import styled from 'styled-components' 


const FooterContainer = styled.div `
    position: fixed; //position fija
    bottom:0;
    height: 80px;
    width: 100vw;
   // border: 1px solid yellow;
    background-color: #181818;
    color: #fff;
    display: flex;
    justify-content: space-between;
  
`
const FooterLeft = styled.div `
    //border: 1px solid white;
    flex:0.3;
    display: flex;// Ayuda a colocar las cajas como si fueran celdas de una tabla
    max-width: 300px;
    align-items: center; //alinea los tres elementos en el centro

    & img{
        //border: 1px solid red;
        width: 60px;
        height: 60px;
        padding: 8px;
        object-fit: contain; //para asegurar que guarda las proporciones adecuadas

    }

    & .info{
        //border: 1px solid blue;
        align-items: center;
        margin:0 10px;

    }

    & p{
        font-size: 14px;
        color: #fff;
       
    }
    & .like{
       // border: 1px solid green;
        display: flex;
        flex:0.5%;
        color: #00ff00;
        height: 20px;
    }


`
const FooterCenter = styled.div `
    flex:0.4;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 300 px;


`
const FooterRight = styled.div `
    flex:0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 35px;

    & .MuiSlider-root {
        color: #00ff00;
    }



`


export {FooterContainer, FooterCenter, FooterRight, FooterLeft}