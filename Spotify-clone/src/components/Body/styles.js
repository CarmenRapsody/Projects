import styled from 'styled-components' 

const BodyContainer= styled.div`
    flex: 0.8;
    background-color: #0000;
    //border: 1px solid blue; /**Delimitamos visualmente el body*/
    background:linear-gradient(#8b0000, #000);
    color: #fff;
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;
    &::-webkit-scrollbar{ //Eliminamos la barra manteniendo el scrollbar
        display: none;
    }
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const HeaderLeft = styled.div`
    display:flex; 
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
        border: none; 
        width: 100%;
    }
`

const HeaderRight = styled.div`
    display:flex;
    flex: 0.15;
    align-items: center;
    
    &h4{ 
        margin-left: 20px;
    }
`

const Info = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;
    
    & img{
        width: 120px;
        margin: 0 20px;
        box-shadow: 0 4px 60px #000;
    }
`

const InfoText = styled.div`
    color: #fff;
    &h1 {
        margin-bottom: 10px;
    }
`

const Songs = styled.div`
    margin: 30px 10px;
`
const Icons = styled.div`
    display:flex;
    align-items:center;
    & .MuiSvgIcon-root{
        margin-right: 10px;
        
    }
`
const SongRowContainer = styled.div`
    display: flex;
    margin-left: 25px;
    align-items: center;
    z-index: 90;
    &:hover{
        cursor: pointer;
        background-color: #0000;
        opacity: 0.8;
    }
    & img{
        height: 50px;
        width: 50px;
        object-fit: contain;   
    }
`

const SongInfo = styled.div`
    margin-left: 10px;
    & p{
        margin-top: 3px;
        color:lightgray;
    }
`


export{BodyContainer,HeaderContainer, HeaderLeft, HeaderRight, 
    Info, InfoText, Songs, Icons, SongRowContainer,SongInfo}