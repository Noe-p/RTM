import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../styles/constantes';
import { H3, P1 } from './Typos';

interface ActionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  image: string;
  title: string;
  date: Date;
  idAction: number;
}

export function ActionCard(props: ActionCardProps): JSX.Element {
  const { className, image, date, title, idAction } = props;
  let navigate = useNavigate();

  function formatDate(date: Date): string {
    return `${date.getDate().toString().padStart(2, '0')}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;
  }

  return (
    <Main
      className={className}
      onClick={() => navigate(`/actions/${idAction}`)}
    >
      <Image src={image ? image : '/assets/empty-image.png'} alt={title} />
      <Description>
        <H3Styled>{title}</H3Styled>
        <P1Styled>{formatDate(date)}</P1Styled>
      </Description>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px !important;
  margin: 10px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${COLORS.GREY};
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.3s;
  transform: scale(1);

  :hover {
    transform: scale(1.02);
    transition: transform 0.3s;
  }
`;

const H3Styled = styled(H3)`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 18px 29px;
  padding-bottom: 0;
`;

const P1Styled = styled(P1)`
  margin: 0;
  padding: 23px 29px;
  padding-top: 2px;
`;
