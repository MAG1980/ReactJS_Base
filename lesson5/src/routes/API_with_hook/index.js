import { useState, useEffect } from "react";
import { useFetchListData } from "../../hooks/useFetchListData";
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
import { TEST_API_URL } from "../../helpers/API";

export const TestAPIwithHook = () => {
  const { loading, error, data, getData } = useFetchListData(TEST_API_URL);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Container>
        <Stack spacing={{ xs: 3, md: 5, lg: 10 }}>
          <Header />
          <Typography variant="h1" align="center">
            Test API
          </Typography>
          {loading && (
            <Box sx={{ textAlign: "center" }}>
              <CircularProgress />
            </Box>
          )}
          {error && <Error reload={getData} />}
          <Button onClick={getData}>Get Data</Button>
          {!loading && data.length > 0 && (
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
