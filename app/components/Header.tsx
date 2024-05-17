import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import ModeToggle from "./Switcher";

const Header = () => {
  return (
    <AppBar position="static" sx={{ maxWidth: '2xl', margin: '0 auto' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Anjrot Dev
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <ModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;