import React from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useState } from 'react';

function CreaturesCard(props){

  // State mangement
  const [isFlipped, setFlipped] = useState(false);

  const itemDropStyle = {
    textTransform: "Capitalize"
  }

  // Back face if creature type is "food"
  function foodCard(){
    return (
      <CardContent>
        <Typography fontFamily="Signika Negative" variant="h6">{props.cName}</Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" style={{marginBottom: "15px", marginTop: "15px"}}>
          {props.cDesc}
        </Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p"><strong>Common Locations: </strong>{props.commonLoc}</Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" sx={{marginTop: "15px"}}><strong>Cooking Effect: </strong>{props.cookingEffect}</Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" sx={{marginTop: "15px"}}><strong>Hearts Recovered: </strong>{props.hRecovered}</Typography>
      </CardContent>
    )
  }

  // Back face if creature type is "non_food"
  function nonFoodCard(){
    return (
      <CardContent>
        <Typography fontFamily="Signika Negative" variant="h6">{props.cName}</Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" style={{marginBottom: "15px", marginTop: "15px"}}>
          {props.cDesc}
        </Typography>
        <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p"><strong>Common Locations: </strong>{props.commonLoc}</Typography>
        <Typography style={itemDropStyle} fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" sx={{marginTop: "15px"}}><strong>Item Drops: </strong>{props.itemDrops}</Typography>
      </CardContent>
    )
  }

  // Return front-face or back-face depending on isFlipped state
  return (
      <Card sx={{ width: 280, height: 450, borderRadius: 3, boxShadow: 4}}>
        <CardActionArea style={{width: 280, height: 460}} onClick={() => setFlipped(!isFlipped)}>
        {
          isFlipped ? (null) : (
            <CardMedia
              sx={{objectFit: "cover"}}
              component="img"
              image={props.cImageURL}
              title="Item Image"
              height="280"
            />
            )
        }

        {
          isFlipped ? (null) : (
            <CardContent style={{overflow: "hidden", textOverflow: 'ellipsis', paddingBottom: "10px", marginBottom: "15px"}}>
              <Typography fontFamily="Signika Negative" gutterBottom variant="h6" component="h2">{props.cName}</Typography>
              <Typography fontFamily="Signika Negative" gutterBottom variant="body2" component="p">Item ID: {props.cID}</Typography>
            </CardContent>)
        }
        
        {
          isFlipped && (props.cType === "non_food") ? (nonFoodCard()) : (null)
        }

        {
          isFlipped && (props.cType === "food") ? (foodCard()) : (null)
        }
        </CardActionArea>
      </Card>
    );
}

export default CreaturesCard;