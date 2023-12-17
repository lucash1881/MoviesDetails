import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsButton = styled.button`
  display: inline-block;
  width: 120px;
  height: 20px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;
export const StyledLink = styled(Link)`
  color: #ffc300;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: #ffc300;
    opacity: 1;
  }
`;
export const MovieDetailsLeft = styled.div`
  display: grid;
  margin: 30px;
`;

export const MovieDetailsRight = styled.div`
  margin: 30px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  background-color: #1c1c1c; /* Ajusta el color de fondo al tono de gris deseado */
  color: #fff;
  padding: 20px;
`;

export const MovieDetailsFooter = styled.div`
  margin: 30px;
  background-color: #1c1c1c; /* Ajusta el color de fondo al tono de gris deseado */
  color: #fff;
  padding: 20px;
  
  p.movie-details-text {
    font-size: 18px;
    font-weight: normal;
  }
  
  .MovieDetailsFooter .section-header {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }
  
  p {
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #fff;
  }

  /* Estilo específico para el texto "MovieDetails" en las reseñas */
  p.movie-details-text {
    font-size: 18px;
    font-weight: normal;
  }

  hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 20px 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
  }
`;


export const BackLink = styled(Link)`
  gap: 4px;
  padding-bottom: 10px;
  color: #ffc300;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    color: #ffc300;
    opacity: 1;
  }
`;


