import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, red } from "@mui/material/colors";
import * as React from "react";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { ScrollView, View, Text } from "react-native";
// import commonStyles from "../commonStyles";
export default function RecipeReviewCard() {
  return (
    <View>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0 64px 0 64px",
          marginTop: "20px",
          backgroundColor: "white",
        }}
        // style={commonStyles.card}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: green[500], marginLeft: "10px" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU"
          alt="Paella dish"
          style={{ borderRadius: "0 64px 0 64px" }}
        />
        <CardActions disableSpacing sx={{ marginLeft: "20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0 64px 0 64px",
          marginTop: "20px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: green[500], marginLeft: "10px" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU"
          alt="Paella dish"
          style={{ borderRadius: "0 64px 0 64px" }}
        />
        <CardActions disableSpacing sx={{ marginLeft: "20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0 64px 0 64px",
          marginTop: "20px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: green[500], marginLeft: "10px" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU"
          alt="Paella dish"
          style={{ borderRadius: "0 64px 0 64px" }}
        />
        <CardActions disableSpacing sx={{ marginLeft: "20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0 64px 0 64px",
          marginTop: "20px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: green[500], marginLeft: "10px" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU"
          alt="Paella dish"
          style={{ borderRadius: "0 64px 0 64px" }}
        />
        <CardActions disableSpacing sx={{ marginLeft: "20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card
        sx={{
          width: "100%",
          borderRadius: "0 64px 0 64px",
          marginTop: "20px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: green[500], marginLeft: "10px" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JORCag4QA5k8Hk3T4qVNZHNpnJPG5xg6InmPYyvuajMleITpa_eX-YG_Lw2PiEyG0qs&usqp=CAU"
          alt="Paella dish"
          style={{ borderRadius: "0 64px 0 64px" }}
        />
        <CardActions disableSpacing sx={{ marginLeft: "20px" }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="comment">
            <ChatBubbleIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </View>
  );
}
