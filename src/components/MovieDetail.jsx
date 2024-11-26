const MovieDetail = ({ detailMovie }) => {
  if (!detailMovie) {
    return <div className="Loading">Loading...</div>;
  }

  return (
    <div className="MovieDetail">
      <img
        src={`http://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
        alt={detailMovie.title}
      />
      <h2>{detailMovie.title}</h2>
      <p className="movie-average">
        <span>평점</span>
        {detailMovie.vote_average}점
      </p>
      <ul className="movie-genres">
        {detailMovie.genres.map((genres) => {
          return <li>{genres.name}</li>;
        })}
      </ul>
      <p>{detailMovie.overview}</p>
    </div>
  );
};

export default MovieDetail;
