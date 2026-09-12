import { useSearchParams, Link } from "react-router-dom";


export default function GenreFilter({ genres }) {

  const [searchParams, setSearchParams] = useSearchParams()
  const selectedGenre = searchParams.get("genre") || "";

  const handleSelect = (genreId) => {
    setSearchParams(genreId ? {genre: genreId} : {})
  }

  return (
    <div className="genres">
      {genres.map((genre, i) => (
        <button
          type="button"
          key={genre.id || i}
          className={`genre-btn ${String(genre.id) === selectedGenre ? ' active' : ''}`}
          onClick = {() => handleSelect(genre.id)}
        >
          {genre.label}
          
        </button>
      ))}
    </div>
  );
}
