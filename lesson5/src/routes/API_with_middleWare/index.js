import { useState, useEffect } from "react";
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
const TEST_API_URL =
  "https://fakerapi.it/api/v1/images?_quantity=12&_type=kittens&_height=150";

export const TestAPIWithMiddleware = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      setError(false);
      setData([]);

      const response = await fetch(TEST_API_URL);
      if (!response.ok) {
        throw new Error("");
      }
      const result = await response.json();
      setData(result.data);
      console.log(result);
      console.log(result.data);
    } catch (e) {
      console.error(e);
      setError(true);
    }
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Container>
        <Stack spacing={{ xs: 3, md: 5, lg: 10 }}>
          <Header />
          <Typography variant="h1" align="center">
            Test API with middleware
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
