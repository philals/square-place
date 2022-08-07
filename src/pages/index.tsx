import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import PixelGrid from "react-pixel-grid";

const Home: NextPage = () => {
  const hello = trpc.proxy.example.hello.useQuery({ text: "from tRPC" });
  const grids = trpc.proxy.grid.getAll.useQuery();
  const one = trpc.proxy.grid.getOne.useQuery();
  const mutation = trpc.proxy.grid.makeAGrid.useMutation();
  const deleteAll = trpc.proxy.grid.deleteAll.useMutation();
  console.log("🚀 ~ one", one.data);
  console.log("🚀 ~ grids", grids.data);

  const r = "#f00";
  const g = "#0f0";
  const b = "#00f";
  const x = "#000";

  const Atoms = [
    [r, g, b, x],
    [r, g, b, x],
    [r, g, b, x],
    [r, g, b, x],
    [r, g, b, x],
    [r, g, b, x],
  ];

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container flex flex-col items-center justify-center min-h-screen p-4 mx-auto">
        <PixelGrid
          data={Atoms}
          options={{
            size: 10,
            padding: 0,
          }}
        />
        <button onClick={() => mutation.mutate()}>Mutation</button>
        <button onClick={() => deleteAll.mutate()}>Clear All</button>
        <div className="flex items-center justify-center w-full pt-6 text-2xl text-blue-500">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

export default Home;
