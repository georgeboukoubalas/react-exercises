import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

export function MovieList() {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<
    "all" | "watched" | "unwatched"
  >("all");

  // 🎯 Filtering logic
  let filteredMovies = movies;

  if (filterType === "watched") {
    filteredMovies = movies.filter((m) => m.watched);
  } else if (filterType === "unwatched") {
    filteredMovies = movies.filter((m) => !m.watched);
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Movie List 🎬</h2>

      {/* FILTER BUTTONS */}
      <div className="flex gap-2 mb-4">
        <button onClick={() => setFilterType("all")}>All</button>
        <button onClick={() => setFilterType("watched")}>Watched</button>
        <button onClick={() => setFilterType("unwatched")}>Unwatched</button>
      </div>

      {/* MOVIE LIST */}
      <div className="flex flex-col gap-2">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span>
              {movie.title} {movie.watched ? "✅" : "❌"}
            </span>

            <button
              onClick={() => toggleWatched(movie.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Toggle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}