import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newData } from "../../store/newTestApi/index";

import {
  Box,
  Button,
  Container,
  Typography,
  CircularProgress,
  Stack,
  ImageList,
  ImageListItemBar,
  ImageListItem,
} from "@mui/material";
import { Header } from "../../Components/Header";
import { Error } from "../../Components/Error";
import {
  getTestAPIData,
  getTestAPILoading,
  getTestAPIError,
} from "../../store/TestAPIWithMiddleware/selectors";

export const TestAPIwithFabricatedReducer = () => {
  const dispatch = useDispatch();
  const isError = useSelector(newData.selectors.getError);
  const isLoading = useSelector(newData.selectors.getLoading);
  const data = useSelector(newData.selectors.getAPIData);

  const getData = () => {
    dispatch(newData.actions.getAPIDataWithThunk);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);
  // console.log(isError);
  // console.log(isLoading);

  return (
    <Box>
      <Container>
        <Stack spacing={{ xs: 3, md: 5, lg: 10 }}>
          <Header />
          <Typography variant="h1" align="center">
            Test API with middleware
          </Typography>
          {isLoading && (
            <Box sx={{ textAlign: "center" }}>
              <CircularProgress />
            </Box>
          )}
          {isError && <Error reload={getData} />}
          <Button onClick={getData}>Get Data</Button>
          {!isLoading && data.length > 0 && (
            <ImageList sx={{ display: "flex", flexWrap: "wrap" }}>
              {data.map((dataItem) => (
                <ImageListItem key={dataItem.url} sx={{ width: "20%" }}>
                  <img
                    sx={{ width: "100%", objectFit: "cover" }}
                    src={`${dataItem.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${dataItem.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={dataItem.title}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={dataItem.title}
                    subtitle={<span>by: {dataItem.description}</span>}
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
