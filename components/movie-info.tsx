async function getMovie(id: string) {
  console.log(`fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`).then((res) =>
    res.json()
  );
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
