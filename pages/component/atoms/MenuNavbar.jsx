import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function MenuNavbar({ name, slug }) {
  return (
    <li className="font-light">
      <Link href={`/category/${slug}`} className="flex items-center">
        {name}{" "}
        <Image
          className="ms-1"
          src="/dropdown.svg"
          alt="icon person"
          width={12}
          height={6}
        />
      </Link>
    </li>
  );
}
