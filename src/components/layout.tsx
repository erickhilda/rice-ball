import Head from "next/head";
import Navbar from "./navbar";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const links = [
  { href: "/topping", label: "topping" },
  { href: "/ketchup", label: "ketchup" },
];

const Layout = ({ title, children }: Props) => (
  <>
    {title ? (
      <Head>
        <title>Rice Ball | {title}</title>
      </Head>
    ) : null}

    <Navbar links={links} />

    <main>
      <div className="p-6">{children}</div>
    </main>
  </>
);

export default Layout;
