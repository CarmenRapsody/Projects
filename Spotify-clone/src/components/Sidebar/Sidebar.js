import React from 'react'
import { SidebarContainer, Playlists} from './styles'

/** Podrimos importar los iconos juntos, pero de cara a produccion
 *  aumenta el tamaño final resultante del proyecto
 */
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon  from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SidebarChoice from './SidebarChoice'


const Sidebar = () => {
  return (
    <SidebarContainer>
        <img src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png" alt="logo"/> 
        {/* El titulo se pasa como un prop y el icono como un componente normal*/}
        <SidebarChoice title="Home" Icon={HomeIcon} />
        <SidebarChoice title="Search" Icon={SearchIcon} />
        <SidebarChoice title="Your Library" Icon={LibraryMusicIcon} />
        <Playlists>PLAYLIST</Playlists>
        <hr></hr>
        {/** Implementar un nuevo componente para las  ( que no sea SidebarChoice) */}
        <SidebarChoice title="Chill" />
        <SidebarChoice title="Temazos" />
        
    </SidebarContainer>
  )
}

export default Sidebar
