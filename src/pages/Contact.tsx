import { Container, Box, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import { Text } from '@mantine/core';

export const Contact = () => {
  return (
    <Container>
      <Box>
        <Title order={4}>Contact</Title>
        <Text size="md">
          If you'd like to reach me, just send an email to &nbsp;
          <Link to="mailto:raz.friman@razfriman.com">
            raz.friman@razfriman.com
          </Link>
          .
        </Text>
      </Box>
    </Container>
  );
};
