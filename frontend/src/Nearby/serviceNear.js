import React from 'react';
import { Avatar, Card, Button, CardActions, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Typography from '@material-ui/core/Typography';
const ServiceNear = () => {
    return ( <div>
        <h1>
        Services near by you
        Lorem ipsum
        
        </h1>
        <AvatarGroup max={7}>
            
  <Avatar 

  alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="/klaus.jpg" />
  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
</AvatarGroup>

<Card >
      <CardActionArea>
        <CardMedia
          image ="/klaus.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        
    </div> );
}
 
export default ServiceNear;