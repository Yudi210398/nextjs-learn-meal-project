import logoimg from "@/assets/logo.png";
import Link from "next/link";
import clases from "./main-header.module.css";
import Image from "next/image";
import ComponenLink from "./componenUser";

export default function Mainheader() {
  return (
    <header className={clases.header}>
      <Link className={clases.logo} href="/">
        <Image src={logoimg} alt="data" priority /> NextLevel Food
      </Link>

      <nav className={clases.nav}>
        <ul>
          {/* <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foddies Community</Link>
          </li> */}

          <ComponenLink path="/meals" name="Browse Meals" />
          <ComponenLink path="/community" name="Foddies Community" />
        </ul>
      </nav>
    </header>
  );
}
