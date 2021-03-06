import { Hero } from '@/ui/Hero';
import { Container, Stack, Text } from '@mantine/core';

export const About = () => {
  return (
    <Container size='xs' px='xs'>
      <Stack spacing={16}>
        <Hero title={<>About Me</>} />
        <Text size='md'>
          My name is Raz Friman. I recently spent 1.5 years as an Enterprise Software Engineer at
          SpaceX. I am now living in Sydney, Australia.
        </Text>
        <Text size='md'>
          I graduated with both an M.S and B.S. Degree in Computer Science from Southern Methodist
          University (SMU), Dallas, Texas.
        </Text>
        <Text size='md'>
          In my free time, you will almost surely find me travelling the world with my GoPro and my
          DJI Mavic Pro drone.
        </Text>
        <Text size='md'>
          I am an avid hiker and enjoy running. Lately, I have been getting into the sport of
          Orienteering, which combines running and navigational skills.
        </Text>
        <Text size='md'>
          I love cooking and baking. I will never pass up an opportunity to bake, as I absolutely
          love desserts and anything sweet.
        </Text>
        <Text size='md'>
          I have been an early enthusiast in the VR space, and am always working on projects to
          explore the possibilities of this technology.
        </Text>
      </Stack>
    </Container>
  );
};
