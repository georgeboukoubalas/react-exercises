import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieState {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  movies: [
    { id: 1, title: "Inception", watched: false },
    { id: 2, title: "Interstellar", watched: true },
    { id: 3, title: "The Dark Knight", watched: false },
    { id: 4, title: "Matrix", watched: true },
  ],

  toggleWatched: (id) =>
    set((state) => ({
      movies: state.movies.map((movie) =>
        movie.id === id
          ? { ...movie, watched: !movie.watched }
          : movie
      ),
    })),
}));