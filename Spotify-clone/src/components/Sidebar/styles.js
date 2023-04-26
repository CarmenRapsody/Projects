import styled from 'styled-components' 

const SidebarContainer = styled.div`
    
    flex: 0.2; /** Le damos un 20% de la pantalla al sidebar */
    height: 100vh;
    background-color: #000;
    min-width: 240px; /** anchura minima al variar el navegador */
    color: #fff;
    //border: 1px solid red; /** para delimitar visualmente el sidebar  */
    & img{
        height: 40px;
        padding: 10px ;
        margin-right:auto
    }

    & hr{
        border: 1px solid #3b3b38; //smokegray
        width: 90%;
        margin: 10px auto;
    }
`

const Playlists= styled.div`
    margin: 10px 0 5px 15px;

`
const Choices = styled.div`
    margin: 5px 0 0 20px ;
    display: flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer; // para cuando pasemos por encima se vea que se pueden clickar
    transition: 200ms color ease-in; //tiempo que tarda el cambiar el color al posicionarnos encima
    &:hover{
        color: #fff;
    }

    & h5 {
        margin: 10px 0 0 20px ;
    }

`


export {SidebarContainer, Playlists, Choices} 