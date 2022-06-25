import { Container, Box, Text, Button, Title } from "@mantine/core";
import resumeUrl from "../static/Resume_Raz_Friman.pdf";

export const Home = () => {
  return (
    <Container>
      <Box>
        <Title order={1}>Hi. I'm Raz.</Title>

        <Title order={1}>
          I'm a full-stack developer with experience in .NET and Angular. I'm
          also an aerial photographer and a VR enthusiast.
        </Title>

        <Title order={1}>
          Senior Software Engineer at <strong>Canva</strong>
        </Title>

        <Title order={1}>
          Software Engineer II at <strong>SpaceX</strong>
        </Title>

        <Title order={1}>
          Software Engineer at <strong>In-Com Data Systems</strong>
        </Title>

        <Text size="md">Creator of RazTracker</Text>

        <Text size="md">
          Creator of TeslaLib - C# wrapper for Tesla Model S API
        </Text>

        <Button component="a" href={resumeUrl} target="_blank" color="inherit">
          Download Résumé
        </Button>
      </Box>
    </Container>
  );
};
