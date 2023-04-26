import React from 'react'
import { BodyContainer, Info, InfoText} from './styles'
import Header from './Header';
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/PlaylistSlice';


const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log("playlist =>", playlist);

  return (
    <BodyContainer>
      <Header/>
      <Info>
        <img src={playlist?.images[0]?.url} alt="" />
        <InfoText>
          <h4>PLAYLIST</h4>
          <p>{playlist?.name}</p>
        </InfoText>
      </Info>
    </BodyContainer>
  )
}

export default Body
