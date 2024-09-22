import Image from "next/image";
import classes from "./mealItem.module.css";
import { Meal } from "./mealsGrid";
import Link from "next/link";

export default function MealItem(meals: Meal) {
  const { title, slug, summary, creator, image } = meals;
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>{creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
