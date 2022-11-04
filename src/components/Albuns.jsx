import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export const EVAlbuns = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "7%" }}>
      <Box mt={4}>
        <Typography style={{ textAlign: "center" }} variant="h1">
          Tim Maia Discografia
        </Typography>

        <Card style={{
              marginTop: "10%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center"}} >
          <CardMedia
            component="img"
            height="180"
            image="https://i.scdn.co/image/ab67616d0000b273bf96aed03a1e378dad91217b"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Descobridor dos Sete Mares
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Album lançado em 1983, um clássico do rei
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="outlined" href="https://open.spotify.com/album/7Ff0Q5oeEoVKHtxJJoXyId?si=RGItlZWqQ3CR0lJQcQoVNA">
                Ouça o Álbum!
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card style={{
              marginTop: "10%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center"}} >
          <CardMedia
            component="img"
            height="180"
            image="https://1.bp.blogspot.com/-vBUwlK-IPY4/XXw_Mwmx2CI/AAAAAAAAPkI/ftgDFvmt7x0Z7eTBmSSAwPO4eFsUPYQOACLcBGAsYHQ/s1600/tim_maia_disco_club_capa.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Disco Club
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Album lançado em 1978, o ápice da Disco Music!
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="outlined" href="https://open.spotify.com/album/5D5OGW1c4enqcI9fqs1XWt?si=ec5BUIBUQ_K3eHGR4KtT3Q">
                Ouça o Álbum!
              </Button>
            </Stack>
          </CardContent>
        </Card> 

        <Card style={{
              marginTop: "10%",
              display: "flex", 
              flexDirection: "column",
              alignItems: "center"}} >
          <CardMedia
            component="img"
            height="180"
            image="https://i.scdn.co/image/ab67616d0000b273c5ba65ef4043539374a3de16"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tim Maia 1973
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Album lançado em 1973, perfeito para sorrir e chorar!
            </Typography>
            <Stack direction="row" spacing={4}>
              <Button variant="outlined" href="https://open.spotify.com/album/6gK1Uf1uZolqGBibGaW5qK?si=hTbFPWwASimrHnbcIJTaZA">
                Ouça o Álbum!
              </Button>
            </Stack>
          </CardContent>
        </Card> 
      </Box>
    </Container>
  );
};

export default EVAlbuns;
