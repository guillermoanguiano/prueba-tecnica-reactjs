import { useQuery } from "react-query";
import axios from "axios";
import { Box, Skeleton, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { ToastContainer } from "react-toastify";

const usePokemons = () => {
  return useQuery("pokemons", async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=12"
    );
    return data;
  });
};

export default function Login() {
  const { isLoading, data: pokemons } = usePokemons();

  return (
    <Box
      as="main"
      sx={{
        width: "100%",
        height: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, md: 4 },
          justifyContent: "center",
          bgcolor: "#fff",
          width: { xs: "90%", md: "40%" },
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Login
        </Typography>
        {isLoading || !pokemons ? (
          <Skeleton variant="text" height={200} width={500} />
        ) : (
          <LoginForm pokemons={pokemons?.results} />
        )}
      </Box>

      <ToastContainer />
    </Box>
  );
}
