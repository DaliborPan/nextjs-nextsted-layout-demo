import { Counter } from "@/components/counter";

import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Counter />
      {children}
    </>
  );
};

export default Layout;
