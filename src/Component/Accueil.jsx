import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import faisons from './faisons.jpg'
import mission from './mission.jpg'
import partner from './partner.jpg'
import computing from './computing.png'
import { CardActionArea } from '@mui/material';
import {gsap} from 'gsap';

function Accueil() {


  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "rgb(204, 195, 195)" });

  };
  
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "white" });
  };


  return (
    <div className="AllCards" >

      <div className='accueilUi'>

        <div className="imgProps">
          <img className="imgPropsap" src={computing} height="400" width={400} alt="green iguana" />
        </div>


        <div className='rightInfo'>
          <h1 className='textRight'>Nous concevons des outils tech solides <em className='emTag'>et durables</em> , pour vous !</h1>
        </div>
      </div>

      <div className='secondAccueilUi'>

        <div className='cardsAll' >

          <Card className='secondAccueilU'  sx={{
            maxWidth: 313,
            marginBottom: 14,
            marginLeft: 1,

          }}>

            <CardActionArea >
              <img className="imgPropsa" src={mission} height="150" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Notre mission
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions onMouseEnter={onEnter} onMouseLeave={onLeave} >
              <Button size="small" variant='outlined' color='warning' sx={{
                marginLeft: 1,

              }}>
                Continuer
              </Button>
            </CardActions>
          </Card>

        </div>

        <div className='open'>

          <Card className='secondAccueilU' sx={{
            maxWidth: 313,
            marginBottom: 14,
            marginLeft: 1,

          }}>
            <CardActionArea >
              <img className="imgPropsa" src={faisons} height="150" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ce que nous faisons
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <Button size="small" variant='outlined' color="warning" sx={{
                marginLeft: 1,

              }}>
                Parcourir
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className='openi'>

          <Card className='secondAccueilU'  sx={{
            maxWidth: 313,
            marginBottom: 14,
            marginLeft: 1,

          }}>
            <CardActionArea >
              <img className="imgPropsa" src={partner} height="150" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Nos partenaires
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions onMouseEnter={onEnter} onMouseLeave={onLeave}>
              <Button  size="small" variant='outlined' color="warning" sx={{
                marginLeft: 1,

              }}>
                Consulter
              </Button>

            </CardActions>

          </Card>


        </div>

      </div>

      <div className='thirdAccueilUi'>

        
      {/* <div className='imgCompetenceSpan'><span>
            <img className="imgArtificial" src={imgArtificial} height="150" alt="green iguana" />
            </span></div> */}

            <div className='divTextUi'>
            <h1 className='textUi'>Laissez-vous impressionner par nos compétences en developpement web et mobile.</h1></div>
        

      </div>

    </div>

  );
}

export default Accueil;