import {
  Button,
  AppBar,
  Container,
  Typography,
  IconButton,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { navigation } from "../navigation";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <AppBar sx={{ gridArea: "header", alignSelf: "center" }} position="static">
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            My MUI Chat
          </Typography>
        </Link>
        {navigation.map((item) => {
          return (
            <Button sx={{ color: "#fff" }}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {item.title}
              </Link>
            </Button>
          );
        })}
        <IconButton color="inherit">
          <AccountBoxIcon />
        </IconButton>
      </Container>
    </AppBar>
  );
};
