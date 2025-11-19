import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Veca Vision Media" },
    { name: "description", content: "Videography business in Bozeman, MT." },
  ];
}

export default function Home() {
  return (
      <h1>Hello React Router!</h1>
  );
}
