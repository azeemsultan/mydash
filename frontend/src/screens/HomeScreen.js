import React,{ useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import { listServiceproviders} from '../actions/serviceprovideraction'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    height: '80px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#4183d9",
  },

}));

function HomeScreen (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


    const serviceProviderList = useSelector(state => state.serviceProviderList);
    const { serviceproviders, loading, error } = serviceProviderList;
    const dispatch = useDispatch();


    useEffect(()=>{
       dispatch(listServiceproviders());

        return()=>{

        };
    }, [])

    
    return loading ? <div>Loading...</div>:
    error? <div> error </div>:
    ( <Grid container>
      <Grid item sm={1}> 
</Grid>
     
<Grid item sm={10}>
        <ul className="serviceproviders" >
      
        {
            serviceproviders.map(serviceprovider=>
             
            <li key={serviceprovider._id}> 
  
      
           <Card className={classes.root}>
      <CardHeader 
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {serviceprovider.name.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            
          </IconButton>
        }
        
       title={
        <Typography variant="h4">
        {serviceprovider.name} 
        </Typography>
       }
      />
       
       <Link to={'/serviceprovider/' + serviceprovider._id}>
      <CardMedia
        className={classes.media}
      
        image={serviceprovider.image}
     
        title="Paella dish"
      /> 
     </Link>
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="p">
         {serviceprovider.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
            </li>)
        }
      
        </ul>
        </Grid>
        <Grid item sm={1}> 
     </Grid>
        </Grid>
    )
}

export default HomeScreen;