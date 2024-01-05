import { Auction } from "./components/Auction";
import { Bestseller } from "./components/Bestseller";
import { Category } from "./components/Category";
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
        {/* <Auction /> */}
      </Container>
    </div>
  );
}

export default App;
