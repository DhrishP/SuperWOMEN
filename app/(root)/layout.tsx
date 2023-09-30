import { Navbarmain } from "@/components/navbarmain";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="">
        
        {children}</div>;
  }