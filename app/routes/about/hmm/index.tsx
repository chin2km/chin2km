import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

export async function loader(args: LoaderArgs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json({ message: "Hmm SubRoute" }));
    }, 1000);
  });
}

const Component = () => {
  const data = useLoaderData();

  return (
    <>
      <div>{data.message}</div>
      <Link to="hello">Hello</Link>
      <Link to="ok">Ok</Link>
    </>
  );
};

export default Component;
