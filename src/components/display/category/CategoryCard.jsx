import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Button, Grid } from "@mui/material";
const CategoryCard = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      s={12}
      md={3}
      sx={{
        margin: "2%",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Cupcake
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              3 days
            </Typography>
          </CardContent>
          <Button>Remove this</Button>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 200, height: 200 }}
          image="https://spoonacular.com/cdn/ingredients_250x250/plain-cupcake.jpg"
          alt="Live from space album cover"
        />
      </Card>
    </Grid>
  );
};

export default CategoryCard;
