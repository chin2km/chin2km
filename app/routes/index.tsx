import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => [{ title: "Home Sweet Home" }];

export default function Index() {
  return (
    <div></div>
  );
}
