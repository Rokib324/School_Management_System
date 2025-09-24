import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <div className="h-screen flex">
        {/* left */}
        <div className="w-[14%] md:w-[10%] lg:w-[14%] xl:w-[14%]">
            <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 p-4">
            <Image src="/TCA-Logo.png" alt="logo" width={30} height={30} />
            <span className="hidden md:block font-bold">The Carter Academy</span>
            </Link> 
            <Menu />
        </div>
        {/* Right */}
        <div className="w-[86%] md:w-[90%] lg:w-[86%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
    );
  }
