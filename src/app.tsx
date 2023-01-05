import { Home } from "./views/home";
import { PageHeader } from "./components/page-header";
import { Container } from "./components/container";

const App = () => (
  <div>
    <PageHeader />
    <Container>
      <Home />
    </Container>
  </div>
);

export default App;
