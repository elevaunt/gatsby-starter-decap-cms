import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function ProductCard() {
  return (
    <Card 
      sx={{ 
        minWidth: 320,
        flex: "1 1 auto",
      }}
    >
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="vertical" sx={{textAlign: "center"}}>
        <Typography level="title-xl">Product Benefit</Typography>
        <div>
          <Typography fontSize="lg" fontWeight="lg">
            Product Title
          </Typography>
        </div>
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" size="lg" color="primary">
            Add card
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}