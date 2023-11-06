import "../globals.css";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { pages } from "@/components/data/navigation";
import WelcomeLayout from "./layout";
import Typewritter from "@/components/Typewritter/Typewritter";
export default function Home() {
  return (
    <html>
      <body className="bg-background">
        <main className="flex flex-row min-h-screen items-center justify-center">
          <Typewritter />
        </main>
      </body>
    </html>
  );
}
