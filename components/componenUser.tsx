"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./main-header.module.css";
interface UserComponents {
  path: string;
  name: string;
}

export default function ComponenLink(components: UserComponents) {
  const path = usePathname();
  return (
    <li>
      <Link
        className={path.startsWith(components.path) ? classes.active : ""}
        href={components.path}
      >
        {components.name}
      </Link>
    </li>
  );
}
