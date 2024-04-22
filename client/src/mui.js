import { createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/* ----- MUI dark theme ----- */
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/* ----- MUI Item ----- */
export const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  fontSize: "1.5rem",
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
}));
