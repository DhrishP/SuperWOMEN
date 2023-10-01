import { Navbarmain } from "@/components/navbarmain";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbarmain />
      {children}
    </div>
  );
}
