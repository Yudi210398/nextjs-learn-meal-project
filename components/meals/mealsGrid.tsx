import React from "react";
import classes from "./mealsGrid.module.css";
import MealItem from "./mealItem";

export interface Meal {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  instructions: string;
  creator_email: string;
}

interface MealArray {
  meals: Meal[];
}

export default function MealsGrid(props: MealArray) {
  const { meals } = props;
  return (
    <ul className={classes.meals}>
      {meals.map((data) => (
        <li key={data.id}>
          <MealItem {...data} />
        </li>
      ))}
    </ul>
  );
}
