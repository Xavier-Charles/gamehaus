import Head from "next/head";
import Image from "next/image";
import GamesList from "../components/home/GamesList";
import Hero from "../components/home/Hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <GamesList />
    </>
  );
}
