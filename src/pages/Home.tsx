import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import resumeUrl from "../static/Resume_Raz_Friman.pdf";

export const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" gap={3} mt={5}>
        <Typography variant="h4">Hi. I'm Raz.</Typography>

        <Typography variant="h4">
          I'm a full-stack developer with experience in .NET and Angular. I'm
          also an aerial photographer and a VR enthusiast.
        </Typography>

        <Typography variant="h4">
          Senior Software Engineer at <strong>Canva</strong>
        </Typography>

        <Typography variant="h4">
          Software Engineer II at <strong>SpaceX</strong>
        </Typography>

        <Typography variant="h4">
          Software Engineer at <strong>In-Com Data Systems</strong>
        </Typography>

        <Typography variant="body1">Creator of RazTracker</Typography>

        <Typography variant="body1">
          Creator of TeslaLib - C# wrapper for Tesla Model S API
        </Typography>

        <Button href={resumeUrl} target="_blank" color="inherit">
          Download Résumé
        </Button>
      </Box>
    </Container>
  );
};
