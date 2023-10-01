
import { mailOptions, transporter } from "@/lib/transporter"
import { auth } from "@clerk/nextjs"

 export async function POST(req:Request){
     const {coords} = await req.json()
     const {userId} = auth()
     if(!userId) return new Response('Unauthorized',{status:401})
     if(!coords) return new Response('Bad Request',{status:400})

        try {
            await transporter.sendMail({
                ...mailOptions,
                text:"Something went wrong",
                html:`<h1>Something went wrong</h1> <p> Check on your son </p> on ${coords}`,
                subject:"Emergency Alert"
            })
            return Response.json("",{status:200})
     } catch (error) {
        console.log(error)
     }
  
    }
