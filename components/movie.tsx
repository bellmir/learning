import Link from "next/link";

import styles from "../style/components/movie.module.css";

type MoviePropsType = {
  id: string;
  title: string;
  poster_path: string;
};

export default function Movie({ title, id, poster_path }: MoviePropsType) {
  return (
    <div className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}
