import dedent from "dedent";
import Together from "together-ai";
import { z } from "zod";
// import { Ratelimit } from "@upstash/ratelimit";
// import { Redis } from "@upstash/redis";
// import { headers } from "next/headers";

// let ratelimit: Ratelimit | undefined;

// Add rate limiting if Upstash API keys are set, otherwise skip
// if (process.env.UPSTASH_REDIS_REST_URL) {
//   ratelimit = new Ratelimit({
//     redis: Redis.fromEnv(),
//     // Allow 100 requests per day (~5-10 prompts)
//     limiter: Ratelimit.fixedWindow(100, "1440 m"),
//     analytics: true,
//     prefix: "blinkshot",
//   });
// }

export async function POST(req: Request) {
  const json = await req.json();
  const data = z
    .object({
      companyName: z.string(),
      selectedLayout: z.enum(["Solo", "Side", "Stack"]),
      selectedLogoStyle: z.enum([
        "Flashy",
        "Tech",
        "Modern",
        "Playful",
        "Abstract",
        "Minimal",
      ]),
      selectedPrimaryColor: z.enum(["Blue", "Red", "Green", "Yellow"]),
      selectedBackgroundColor: z.enum(["Random", "Gray", "Black", "White"]),
      additionalInfo: z.string().optional(),
    })
    .parse(json);

  // Add observability if a Helicone key is specified, otherwise skip
  // const options: ConstructorParameters<typeof Together>[0] = {};
  // if (process.env.HELICONE_API_KEY) {
  //   options.baseURL = "https://together.helicone.ai/v1";
  //   options.defaultHeaders = {
  //     "Helicone-Auth": `Bearer ${process.env.HELICONE_API_KEY}`,
  //     "Helicone-Property-BYOK": userAPIKey ? "true" : "false",
  //   };
  // }

  const client = new Together();

  // if (userAPIKey) {
  //   client.apiKey = userAPIKey;
  // }

  // if (ratelimit && !userAPIKey) {
  //   const identifier = getIPAddress();

  //   const { success } = await ratelimit.limit(identifier);
  //   if (!success) {
  //     return Response.json(
  //       "No requests left. Please add your own API key or try again in 24h.",
  //       {
  //         status: 429,
  //       },
  //     );
  //   }
  // }

  const prompt = dedent`Design a professional, unique, and memorable logo for a company that effectively represents the brand's identity and values. The logo should be versatile for use across various mediums and sizes, maintaining clarity and impact in both digital and print formats.

  Here are the details:

  Company name: ${data.companyName}
  Style: ${data.selectedLogoStyle}
  Primary color: ${data.selectedPrimaryColor} 
  Background color: ${data.selectedBackgroundColor}

  ${
    data.additionalInfo
      ? `Here's some additional information to help guide your design: ${data.additionalInfo}`
      : ""
  }
  ${
    data.selectedLayout === "Solo"
      ? `Focus solely on creating a minimalist icon or symbol without any accompanying text whatsoever. COMPANY NAME NOT INCLUDED.`
      : ""
  }
  ${
    data.selectedLayout === "Side"
      ? `Have the company name placed to the right of logo you generate. Ensure the text and icon are well-aligned for visual balance.`
      : ""
  }
  ${
    data.selectedLayout === "Stack"
      ? `Have the company name positioned directly underneath the icon or symbol. Ensure vertical alignment with equal emphasis on both text and symbol for a balanced, clean layout.`
      : ""
  }
  `;

  console.log(prompt);

  let response;
  try {
    response = await client.images.create({
      prompt,
      model: "black-forest-labs/FLUX.1.1-pro",
      width: 512,
      height: 512,
      steps: 3,
      // @ts-expect-error - this is not typed in the API
      response_format: "base64",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    return Response.json(
      { error: e.toString() },
      {
        status: 500,
      },
    );
  }

  return Response.json(response.data[0]);
}

export const runtime = "edge";

// function getIPAddress() {
//   const FALLBACK_IP_ADDRESS = '0.0.0.0';
//   const forwardedFor = headers().get('x-forwarded-for');

//   if (forwardedFor) {
//     return forwardedFor.split(',')[0] ?? FALLBACK_IP_ADDRESS;
//   }

//   return headers().get('x-real-ip') ?? FALLBACK_IP_ADDRESS;
// }
