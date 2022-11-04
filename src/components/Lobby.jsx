import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

export const EVLobby = () => {
  return (
    <Container maxWidth="xs" style={{ marginTop: "5%" }}>
      <Typography style={{ textAlign: "center" }} variant="h2">
        Bem Vindo ao Site Tim Maia Records!
      </Typography>
      <Divider />
      <img src="https://th.bing.com/th/id/R.db194366ca6b0d31e1c04bd116ab03e7?rik=Ain169mvJo65Lg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-BmeX39zKlTs%2fT7vWkM79mKI%2fAAAAAAAAOm0%2fFmnbGsXEZEo%2fs1600%2fTim%2bMaia%2b11.jpg&ehk=JBzFc9ZeUiV2hbdt4lWFcqL9GujFmSRm89AicqSJT64%3d&risl=&pid=ImgRaw&r=0"/>
    </Container>
  );
};

export default EVLobby;
