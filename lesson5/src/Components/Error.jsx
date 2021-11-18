import { Button, Alert } from "@mui/material";

export const Error = ({ reload }) => {
  return (
    <Alert
      severity="error"
      variant="outlined"
      sx={{ justifyContent: "center" }}
    >
      This is an error alert — check it out!
      <Button onClick={reload}>Reload</Button>
    </Alert>
  );
};
