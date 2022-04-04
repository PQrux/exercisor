import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./configs/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div/>
    </ThemeProvider>
  );
}

