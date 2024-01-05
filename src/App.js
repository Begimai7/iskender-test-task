import { Bestseller } from "./api/components/Bestseller";
import { Category } from "./api/components/Category";
import { Header } from "./api/components/Header";
import { SortBlock } from "./api/components/SortBlock";
import { Container } from "./api/components/UI/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SortBlock />
        <Category />
        <Bestseller />
      </Container>
    </div>
  );
}

export default App;
