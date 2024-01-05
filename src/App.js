import { Header } from "./api/components/Header";
import { SortBlock } from "./api/components/SortBlock";
import { Container } from "./api/components/UI/Container";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <SortBlock />
      </Container>
    </div>
  );
}

export default App;
