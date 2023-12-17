import { useState, useEffect, Suspense } from 'react';
import { fetchGetMovieDetails, fetchMovieTrailer } from 'services/api';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { MovieDetailsLeft, MovieDetailsRight, MovieDetailsContainer, MovieDetailsFooter, BackLink, StyledLink } from './MovieDetails.styled';


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const [movieTrailer, setMovieTrailer] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    fetchGetMovieDetails(movieId).then(setMovieDetails);
    fetchMovieTrailer(movieId).then((trailer) => {
      if (trailer.length > 0) {
        setMovieTrailer(trailer[0]);
      }
    });
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  const { poster_path, title, original_title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <MovieDetailsContainer>
        <MovieDetailsLeft>
          <BackLink to={backLinkHref}>Atrás</BackLink>
          <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${poster_path}`} alt={title} />
        </MovieDetailsLeft>
        <MovieDetailsRight>
          <h2>{original_title}</h2>
          <p>Puntuacion de la Comunidad: {Math.floor(vote_average * 10)}%</p>
          <h3>Sinopsis</h3>
          <p>{overview}</p>
          <h4>Generos</h4>
          <p>{genres.map((prev) => prev.name).join(' ')}</p>
          {movieTrailer && (
            <>
              <h4>Video</h4>
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${movieTrailer.key}`}
                  title="Movie Trailer"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}
        </MovieDetailsRight>
      </MovieDetailsContainer>
      <MovieDetailsFooter>
      <p className="section-header">Informacion Adicional</p>
  <hr />
  <ul>
    <li>
      <StyledLink to="cast" state={{ from: backLinkHref }}>
        Reparto
      </StyledLink>
    </li>
    <li>
      {/* Modifica esta sección donde renderizas las reseñas */}
      <StyledLink to="reviews" state={{ from: backLinkHref }}>
        Reseñas
      </StyledLink>
      <Suspense>
        <Outlet />
      </Suspense>
    </li>
  </ul>
  <hr />
</MovieDetailsFooter>
    </>
  );
};