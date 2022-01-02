import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ links }: { links: any[] }) => {
  const router = useRouter();
  return (
    <header className="py-4 px-6 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-none h-full">
        <div className="flex flex-1 items-center">
          <a href="/" className="dark:text-slate-200 font-bold">
            Rice Ball
          </a>
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
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
