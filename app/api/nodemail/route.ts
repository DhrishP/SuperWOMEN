import { mailOptions, transporter } from "@/lib/transporter";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const { userId } = auth();
  const { latitude, longitude } = await req.json();
  if (!userId) return NextResponse.json("Not authorized", { status: 401 });
  if (!latitude && !longitude)
    return NextResponse.json("No credentials were found", { status: 400 });
  try {
    await transporter.sendMail({
      ...mailOptions,
      text: "Something went wrong",
      html: `<body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
            <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:0 auto;padding:20px 25px 48px;background-image:url(&quot;/assets/raycast-bg.png&quot;);background-position:bottom;background-repeat:no-repeat, no-repeat">
              <tr style="width:100%">
                <td><img alt="Raycast" src="https://i.pinimg.com/564x/85/0d/25/850d254c4b2946d24ba75d53166a9c1c.jpg" width="245" height="180" style="display:block;outline:none;border:none;text-decoration:none" />
                  <h1 style="font-size:28px;font-weight:bold;margin-top:48px;text-align: center;">superWOMEN</h1>
                  <table style="margin:24px 0" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td>
                          <p style="font-size:16px;line-height:26px;margin:16px 0"><a target="_blank" style="color:#FF6363;text-decoration:none" href="https://www.google.com/maps/place/${latitude}+${longitude}/@${latitude},${longitude},17z;">Track them Now!!</a> </a></p>
                        </td>
                      </tr>
                      <p>There might be someone close to you in danger , Please click on the link <strong>below</strong> to find where the email came from and whom it might be <br><br> Best Regards, <br>
                    Team superWOMEN
                    </p>
                    </tbody>
                  </table>
                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#dddddd;margin-top:48px" /><img src="https://react-email-demo-ijnnx5hul-resend.vercel.app/static/raycast-logo.png" width="32" height="32" style="display:block;outline:none;border:none;text-decoration:none;-webkit-filter:grayscale(100%);filter:grayscale(100%);margin:20px 0" />
                  
                </td>
              </tr>
            </table>
          </body>
        `,
      subject: "Emergency",
    });
    return NextResponse.json("", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
}
