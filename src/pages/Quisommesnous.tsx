import styled from "styled-components";
import { Layout } from "../components/Layout";

interface QuisommesnousProps {
    className?: string;
  }

export function Quisommesnous(props: QuisommesnousProps): JSX.Element {
    const { className } = props;
  
    return (
      <Layout>
        <Main className={className}>
          <h1>Qui sommes nous ?</h1>
        </Main>
      </Layout>
    );
  }

  const Main = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  `;