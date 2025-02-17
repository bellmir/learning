import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type ParamsType = Promise<{ id: string }>;

export async function generateMetadata(props: { params: ParamsType }) {
  const { id } = await props.params;
  console.log(id);
  return {
    title: "lalal",
  };
}

export default async function MovieDetail(props: { params: ParamsType }) {
  const { id } = await props.params;
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  return (
    <div>
      <h1>Movie detail page</h1>
      <Suspense fallback={<h2>Loading movie info</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
