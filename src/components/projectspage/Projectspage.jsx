import React from 'react'
import './projectspage.scss'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Changas from '../../assets/projects/changas.png'
import Dogs from '../../assets/projects/Dogs.png'
import Chat from '../../assets/projects/chat.png'

const useStyles = makeStyles({
  root: {
    borderRadius: 10,
    maxWidth: 470,
  },
  media: {
    height: 240,
  },
})

const Projects = () => {
  const classes = useStyles()
  return (
    <div className="projects" id="projectspage">
      <Card className={classes.root}>
        <CardActionArea
          href="https://thedogsapp.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardMedia className={classes.media} image={Dogs} />
          <CardContent className="content">
            <Typography gutterBottom variant="h5" component="h2">
              The Dogs App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It was a 4 week individual project as part of Henry´s bootcamp. I
              implemented, landing page, pagination, detail view, filters and
              the posibility of creating your own dogs.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="actions">
          <Button
            href="https://github.com/pablogomila/PI-Dogs-FT14a"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Github Repository
          </Button>
          <Button
            href="https://thedogsapp.vercel.app/"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Live Version
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          href="https://changas.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardMedia className={classes.media} image={Changas} />
          <CardContent className="content">
            <Typography gutterBottom variant="h5" component="h2">
              Changas - Generando Oportunidades
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              It was a 4 week project executed with 7 partners. We were working
              as a team splitting, organizing and developing different tasks.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="actions">
          <Button
            href="https://github.com/pablogomila/Changas"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Github Repository
          </Button>
          <Button
            href="https://changas.vercel.app/"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Live Version
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea
          href="https://chat-app-one-gamma.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <CardMedia className={classes.media} image={Chat} />
          <CardContent className="content">
            <Typography gutterBottom variant="h5" component="h2">
              Chat App
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Developed as a challenge it was a great oportunity to learn Socket.io
              integration for future projects.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="actions">
          <Button
            href="https://github.com/pablogomila/chat-app"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Github Repository
          </Button>
          <Button
            href="https://chat-app-one-gamma.vercel.app/"
            target="_blank"
            rel="noreferrer"
            size="medium"
            variant="outlined"
            color="secondary"
          >
            Live Version
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Projects
