import React from 'react'
import { FooterContainer, FooterLeft, FooterCenter,  FooterRight} from './styles'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import SkipeviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import RepeatIcon from '@material-ui/icons/Repeat'

import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import VolumenDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@material-ui/core'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft> 
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Diamonds_-_Rihanna.png"/>
        <div className='info'>
          <h4>Dayamons</h4>
          <p>La Riri</p>
        </div>
        <FavoriteOutlinedIcon className='like'/>
      </FooterLeft>
      
      <FooterCenter>
        <ShuffleIcon/>
        <SkipeviousIcon/>
        <PlayCircleOutlineIcon/>
        <SkipNextIcon/>
        <RepeatIcon/>  
      </FooterCenter>

      <FooterRight>
            <Grid container spacing={2}>
              <Grid item><PlaylistPlayIcon/></Grid>
              <Grid item><VolumenDownIcon/></Grid>
              <Grid item xs><Slider/></Grid>
             
             
             
             {/**Para cambiar el color del slider podemos inspeccionar el codigo
              desde el navegador para ver su nombre de */}

            </Grid>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer
