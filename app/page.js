import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>hello</h2>

      <Link href={"/dashboard"}>
        <Button>HELLLOOO</Button>
      </Link>
    </div>
  );
}
