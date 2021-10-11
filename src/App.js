import './App.css';
import {Box} from "@mui/system"
import Header from "./components/Header"
import ImageDisplay from "./components/ImageDisplay"
import { Container} from "@mui/material";

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <ImageDisplay />
      </Container>
    </Box>
  );
}

export default App;
