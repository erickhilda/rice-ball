import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

const Navbar = ({ links }: { links: any[] }) => {
  const router = useRouter();

  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <header className="py-4 px-6 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-none h-full">
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className="dark:text-slate-200 font-bold">Rice Ball</a>
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          {links.length > 0 && (
            <nav className="inline-flex gap-6 dark:text-slate-200 items-center capitalize font-semibold">
              {links.map(({ label, href }) => (
                <Link key={label} href={href}>
                  <a
                    className={`${
                      router.pathname === href ? "text-sky-500" : ""
                    }`}
                  >
                    {label}
                  </a>
                </Link>
              ))}
              {colorTheme === "light" ? (
                <Icon
                  icon="heroicons-outline:sun"
                  className="text-slate-200 text-lg"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <Icon
                  icon="heroicons-outline:moon"
                  className="text-slate-800 text-lg"
                  onClick={() => setTheme("dark")}
                />
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
