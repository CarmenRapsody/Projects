import styled from 'styled-components' 

const BodyContainer= styled.div`
    flex: 0.8;
    background-color: #121212;
    //border: 1px solid blue; /**Delimitamos visualmente el body*/

`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

`

const HeaderLeft = styled.div`
//contenedor blanco del input (reajustar margin y padding)
    display:flex; //alinea la lupa y el texto
    align-items: center; //ajusta input 
    flex:0.5%;
    min-width: 5px ;
    background-color: #fff;
    color: #181818;
    border-radius: 30px;
    padding: 10px;
    margin-right: 30%;
    margin-top: 10PX;
 

    & input{
        //texto
        border: none; //le quitamos el borde
        width: 100%;

    }


`


const HeaderRight = styled.div`
    display:flex;
    flex: 0.2;
    align-items: center;
    &h4{
        
        margin-left: 15px;
        margin-right: 15px;
    }
`

const Info = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    & img{
        width: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px #000;

    }
`

const InfoText = styled.div`
flex: 1;
color: white;
&h1{
    margin-bottom: 10px;
}

`


export{BodyContainer,HeaderContainer, HeaderLeft, HeaderRight, 
    Info, InfoText}