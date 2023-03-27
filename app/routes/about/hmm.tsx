import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";

export async function loader(args: LoaderArgs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(json({ message: "Hmm" }));
    }, 1000);
  });
}

const Component = () => {
  const data = useLoaderData();

  return (
    <>
      <div>{data.message}</div>
      <Outlet />
    </>
  );
};

export default Component;
