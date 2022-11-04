import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { LoremIpsum } from "react-lorem-ipsum";
import Divider from "@mui/material/Divider";

export const EVTimMaia = () => {
  return (
    <Container maxWidth="xs" style={{ textAlign: "justify", marginTop: "5%" }}>
      <Typography style={{ textAlign: "center" }} variant="h2">
        Sobre o Tim Maia (Lixo)
      </Typography>
      <Divider />
      <LoremIpsum p={3} />
    </Container>
  );
};

export default EVTimMaia;
