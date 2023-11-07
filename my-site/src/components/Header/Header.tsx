import Link from "next/link";
import { pages, Page } from "../data/data";

function Header({ data }: { data: Page[] }) {
  return (
    <header className="flex flex-col relative bg-indent w-full h-48">
      <div className="flex flex-col justify-around h-full px-6 bg-indent z-10">
        <nav className="text-right flex flex-row gap-6 self-end">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="font-bold text-class link link-underline link-underline-black hover:text-keyword uppercase"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <h1 className="text-keyword">
          <span className="text-yellowbracket">&#123; </span>
          <span className="text-keyword">marcinnikel</span>
          <span className="text-yellowbracket"> &#125;</span>
        </h1>
      </div>
    </header>
  );
}

export default Header;
