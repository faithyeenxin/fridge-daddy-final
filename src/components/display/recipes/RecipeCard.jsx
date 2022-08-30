import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const buttonSx = {
  backgroundColor: "#d1d1b5",
  color: "white",
  margin: "1% auto",
  display: "flex",
  fontWeight: 200,
  fontSize: 10,
  letterSpacing: 1,
  borderRadius: 2,
};
const RecipeCard = ({ item }) => {
  return (
    <Grid item s={12} md={4} lg={4}>
      <Card sx={{ fontsize: 18, height: "100%" }}>
        <CardMedia
          component="img"
          //   height="194"
          image={item.image}
        />
        <CardContent sx={{ textAlign: "center", height: 100 }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
              textAlign: "center",
              fontStyle: "italic",
              color: "#3b5f4b",
              paddingBottom: 1,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              textAlign: "center",
              fontStyle: "italic",
              color: "#3b5f4b",
            }}
          >
            ({item.missedIngredientCount} missing ingredients)
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="primary" sx={buttonSx}>
            See Recipe
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RecipeCard;