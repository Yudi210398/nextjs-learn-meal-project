async function getDatsa() {
  const res = await fetch(`http://localhost:3001/recipe/menumakanan`, {
    method: "GET",
  });

  return res.json();
}

import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { Suspense } from "react";

export default async function Meals() {
  let datas;

  datas = await getDatsa();
  if (datas?.error) throw new Error(`Failed to fetch data gk bisa`);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <header className={classes.header}>
        <h1>
          Delicius meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourseft. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<p>loading... </p>}>
          <MealsGrid meals={datas} />
        </Suspense>
      </main>
    </>
  );
}
