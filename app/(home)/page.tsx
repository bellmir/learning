import Movie from "../../components/movie";
import styles from "../../style/page/home.module.css";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("im fetching");
  return fetch(process.env.NEXT_PUBLIC_API_URL).then((res) => res.json());
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        ></Movie>
      ))}
    </div>
  );
}
