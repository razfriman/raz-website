import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const About = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column"  gap={3} mt={5}>
        <Typography variant="h4">About</Typography>
        <Typography variant="body1">
          My name is Raz Friman. I recently spent 1.5 years as an Enterprise
          Software Engineer at SpaceX. I am now living in Sydney, Australia.
        </Typography>
        <Typography variant="body1">
          I graduated with both an M.S and B.S. Degree in Computer Science from
          Southern Methodist University (SMU), Dallas, Texas.
        </Typography>
        <Typography variant="body1">
          In my free time, you will almost surely find me travelling the world
          with my GoPro and my DJI Mavic Pro drone.
        </Typography>
        <Typography variant="body1">
          I am an avid hiker and enjoy running. Lately, I have been getting into
          the sport of Orienteering, which combines running and navigational
          skills.
        </Typography>
        <Typography variant="body1">
          I love cooking and baking. I will never pass up an opportunity to
          bake, as I absolutely love desserts and anything sweet.
        </Typography>
        <Typography variant="body1">
          I have been an early enthusiast in the VR space, and am always working
          on projects to explore the possibilities of this technology.
        </Typography>
      </Box>
    </Container>
  );
};
