import { Spacer } from "@/components/Spacer";
import { Avatar, Box, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import avatarUrl from "@/static/avatar.webp";

export const AppHeader = () => {
    return (
        <Box>
            <Box>
                <Avatar alt="Raz Friman" src={avatarUrl} />
                <h1>Raz Friman</h1>
            </Box>
            <Spacer />
            <Box>
                <Button component={Link} to="/">
                    Home
                </Button>
                <Button component={Link} to="/about">
                    About
                </Button>
                <Button component={Link} to="/projects">
                    Projects
                </Button>
                <Button component={Link} to="/contact">
                    Contact
                </Button>
            </Box>
        </Box>
    );
};
