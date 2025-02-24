async function getVideos(id: string) {
  console.log(`fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}/videos`).then((res) =>
    res.json()
  );
  // throw new Error("something broke...");
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
