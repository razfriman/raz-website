import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

export const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" gap={3} mt={5}>
        <Typography variant="h4">Contact</Typography>
        <Typography variant="body1">
          If you'd like to reach me, just send an email to &nbsp;
          <Link href="mailto:raz.friman@razfriman.com">
            raz.friman@razfriman.com
          </Link>
          .
        </Typography>
      </Box>
    </Container>
  );
};
