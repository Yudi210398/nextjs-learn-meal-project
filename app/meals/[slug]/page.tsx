export interface SlugData {
  title: string;
  creator: string;
  summary: string;
  instructions: string;
  image: string;
  error?: string;
  pesan?: string;
}

async function getSlugId(params: string): Promise<SlugData> {
  const res = await fetch(`http://localhost:3001/recipe/cari/${params}`, {
    method: "PATCH",
    cache: "no-store",
  });

  return await res.json();
}

export interface Cek {
  params: {
    slug: string;
  };
}

import Image from "next/image";
import clases from "./slug.module.css";
import { notFound } from "next/navigation";
export default async function SlugMeal(paramss: Cek) {
  const { params } = paramss;
  const hasil = await getSlugId(params?.slug);
  if (hasil?.error) throw new Error(hasil?.error);
  if (hasil.pesan) notFound();
  console.log(hasil.image, `wkwk`);
  return (
    <>
      <header className={clases.header}>
        <div className={clases.image}>
          <Image src={hasil.image} alt={hasil.title} fill />
        </div>
        <div className={clases.headerText}>
          <h1>{hasil.title}</h1>
          <p className={clases.creator}>by yudi.berland@gmail.com</p>
          <p className={clases.summary}>{hasil.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={clases.instructions}
          dangerouslySetInnerHTML={{
            __html: hasil?.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
