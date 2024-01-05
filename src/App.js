import { Bestseller } from "./components/Bestseller";
import { Category } from "./components/Category";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SortBlock } from "./components/SortBlock";
import { Container } from "./components/UI/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SortBlock />
        <Category />
        <Bestseller />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
