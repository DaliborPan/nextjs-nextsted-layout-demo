"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

const useNextPathname = () => {
  const params = useParams();
  const pathname = usePathname();

  const parts = pathname.split("/");
  parts.pop();

  return parts.join("/") + "/" + (+params.id + 1);
};

const NextIdLink = () => {
  const nextPathname = useNextPathname();

  return (
    <Link className="px-2 py-1 bg-red-300 rounded-md" href={nextPathname}>
      Next ID {`-->`}
    </Link>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-x-6 p-4 shadow bg-white rounded-lg">
      <button
        className="bg-blue-200 px-2 py-1 rounded-lg"
        onClick={() => setCount((c) => c - 1)}
      >
        Minus
      </button>
      <span className="rounded-lg shadow px-2 py-1">
        counter value: {count}
      </span>
      <button
        className="bg-blue-200 px-2 py-1 rounded-lg"
        onClick={() => setCount((c) => c + 1)}
      >
        Plus
      </button>

      <div className="grow" />

      <NextIdLink />
    </div>
  );
};
