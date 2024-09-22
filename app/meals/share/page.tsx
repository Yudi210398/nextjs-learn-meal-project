import ImagePicker from "@/components/meals/imagePicker";
import classes from "./page.module.css";

interface Meal {
  title: string;
  name: string;
  email: string;
  image: string;
  summary: string;
  instructions: string;
}

export default function Share() {
  async function handleImage(formData: FormData) {
    "use server";

    const meal: Meal = {
      title: formData?.get("title") as string,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      image: formData.get("image") as string,
      summary: formData.get("summary") as string,
      instructions: formData.get("instructions") as string,
    };
    console.log(meal);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={handleImage}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
            <br />
          </p>
          <ImagePicker name="image" label="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
