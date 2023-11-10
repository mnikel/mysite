import "../globals.css";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { pages } from "@/components/data/data";
import Typewritter from "@/components/Typewritter/Typewritter";
export default function Home() {

  return (
    <html>
      <body className="">
        <main className="">
          <Typewritter />
        </main>
      </body>
    </html>
  );
}
