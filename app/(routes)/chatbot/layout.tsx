
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default function ChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const {userId} = auth()
    if (!userId) {
        redirect('sign-in')
    }
  return( <div className="">{children}</div>)
}