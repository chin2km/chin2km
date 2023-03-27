import { Link } from "@remix-run/react";

export const meta = () => [{ title: "About" }];

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
