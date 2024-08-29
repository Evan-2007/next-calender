import Image from "next/image";
import {ModeToggle} from "@/components/theme-toggle";
import { Header } from "@/components/ui/header";
import {Calender} from "@/components/ui/calender/calender";

export default function Home() {
  return (
      <div>
        <Header />
        <Calender />
      </div>
  );
}
