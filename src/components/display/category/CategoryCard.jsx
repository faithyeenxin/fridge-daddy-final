import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";

/* 
mockShelfLifeData is a list of objects like below
{
  id: "rec1koHMBhfW8dt8r",
  name: "hard cheese",
  shelflife: "31",
  dateAdded: "2022-08-26",
  contributor: "Faith ",
  imgUrl: "https://spoonacular.com/cdn/ingredients_250x250/brie.jpg",
};
*/

const CategoryCard = ({ name, shelflife, imgUrl }) => {
  return (
    <Grid
      item
      s={4}
      md={2.5}
      sx={{
        margin: "2%",
      }}
    >
      <Card sx={{ display: "flex", maxWidth: 300, minWidth: 300, height: 150 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* sx={{ flex: "1 0 auto" }} */}
          <CardContent sx={{ width: "80%", height: "100%" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              fullWidth
            >
              {shelflife} days
            </Typography>
          </CardContent>
          <Button>Remove this</Button>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 150, height: 150 }}
          image={imgUrl}
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default CategoryCard;
