import Image from "next/image";
import Link from "next/link";
import UsersPage from "./users/page";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      Welcome to todolist
      <Link href="/tasks">Tasks</Link>
    </main>
  );
}
