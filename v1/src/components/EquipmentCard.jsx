import React from "react";
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useState } from 'react';

function EquipmentCard(props){

    const [isFlipped, setFlipped] = useState(false);

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
            isFlipped ? (
              <CardContent style={{padding: "10px"}}>
                <Typography fontFamily="Signika Negative" variant="h6">{props.cName}</Typography>
                <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" style={{marginBottom: "15px", marginTop: "5px"}}>
                  {props.cDesc}
                </Typography>
                <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p"><strong>Common Locations: </strong>{props.commonLoc}</Typography>
                <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" sx={{marginTop: "15px"}}><strong>Defense Value: </strong>{props.defense}</Typography>
                <Typography fontFamily="Signika Negative" variant="body2" color="textSecondary" component="p" sx={{marginTop: "15px"}}><strong>Attack Damage: </strong>{props.attack}</Typography>
              </CardContent>
            ) : (
              <CardContent style={{overflow: "hidden", textOverflow: 'ellipsis', paddingBottom: "10px", marginBottom: "15px"}}>
                <Typography fontFamily="Signika Negative" gutterBottom variant="h6" component="h2">{props.cName}</Typography>
                <Typography fontFamily="Signika Negative" gutterBottom variant="body2" component="p">Item ID: {props.cID}</Typography>
              </CardContent>
            )
          }
    
          </CardActionArea>
        </Card>
      );
}

export default EquipmentCard;