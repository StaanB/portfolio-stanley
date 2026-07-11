import { HomeList } from "@/components/HomeList";
import { projects } from "@/content/projects";

export default function Home() {
  return <HomeList projects={projects} />;
}
