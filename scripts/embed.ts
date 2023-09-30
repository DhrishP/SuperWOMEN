// import { PGEssay, PGJSON } from "../types";
import { loadEnvConfig } from "@next/env";
import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import OpenAI from "openai";
type LawsJSON = {
    content:string,
    gpt_tokens:number,
    content_length:number
}

loadEnvConfig("");

const generateEmbeddings = async (lawstext:LawsJSON[]) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  for (let i = 0; i < lawstext.length; i++) {
    const section = lawstext[i];

    for (let j = 0; j < 1; j++) {
      const chunk = section.content;

      const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: chunk,
      });

      const [{ embedding }] = embeddingResponse.data;

      const { data, error } = await supabase
        .from("law")
        .insert({
            content:chunk,
            gpt_tokens:section.gpt_tokens,
            content_length:section.content_length,
            embedding
        })
        .select("*");

      if (error) {
        console.log("error", error);
      } else {
        console.log("saved", i, j);
      }

      await new Promise((resolve) => setTimeout(resolve, 20000));
    }
  }
};

(async () => {
  const lawstext:LawsJSON[] = JSON.parse(fs.readFileSync("scripts/laws.json", "utf8"));
  await generateEmbeddings(lawstext);
})();
