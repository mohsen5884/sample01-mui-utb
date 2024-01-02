import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { theme } from "./theme";

function App() {

const modeHandler=(tt)=>{
  theme.palette.mode=tt;
}

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          pt={8}
        >
          <Sidebar onChangeMode={modeHandler}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
