import React from 'react'
import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'
import { SpotifyBody } from './styles'
import Footer from '../Footer/Footer'

const Player = () => {
  return (
    /*Jerarquicamente no nos permite desplegar dos componentes
     podemos solucionarlo con un Fragment o un div*/
    <>
      <SpotifyBody>
        <Sidebar/>
        <Body/>
      </SpotifyBody>
      <Footer/>
    </>
  )
}

export default Player
