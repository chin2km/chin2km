import { useMatches } from "@remix-run/react";

export default function Section() {
  const matchingRoutes = useMatches();

  const sectionName = matchingRoutes[0].params.section;

  return (
    <div>
      <h1>About {sectionName}</h1>
    </div>
  );
}
