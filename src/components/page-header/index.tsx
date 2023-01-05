import { Container } from "../container";
import "./index.css";

interface IProps {}

export const PageHeader = ({}: IProps) => {
  return (
    <header className="site-header">
      <Container>
        <h1>
          <a href="/index.html" title="Go to Bankly homepage">
            <img src="/bankly.svg" alt="Bankly" />
          </a>
        </h1>
      </Container>
    </header>
  );
};
