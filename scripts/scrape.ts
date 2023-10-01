import fs from "fs";
import path from "path";
import { encode } from "gpt-3-encoder";
import Gps from "@/components/gps";
const CHUNK_SIZE = 1000;
type StringChunk = {
  content: string;
  gpt_tokens: number;
  content_length: number;
};
const ChunkString = () => {
  const filePath = path.join(__dirname, "laws.txt");
  const text = fs.readFileSync(filePath, "utf-8");
  let essayTextChunks: string[] = [];
  if (encode(text).length > CHUNK_SIZE) {
    const split = text.split(". "); // makes an essayChunks of sentences by splitting at the period and space which was added by the regex above
    let chunkText = "";

    for (let i = 0; i < split.length; i++) {
      const sentence = split[i];
      const sentenceTokenLength = encode(sentence).length;
      const chunkTextTokenLength = encode(chunkText).length;

      if (chunkTextTokenLength + sentenceTokenLength > CHUNK_SIZE) {
        essayTextChunks.push(chunkText);
        chunkText = "";
      }

      if (sentence && sentence[sentence.length - 1].match(/[a-z0-9]/i)) {
        // used to add period to the end of the sentence if it doesn't have one
        chunkText += sentence + ". ";
      } else {
        chunkText += sentence + " "; // used to add space to the end of the sentence if it doesn't have one
      }
    }

    essayTextChunks.push(chunkText.trim()); // used to remove extra spaces
  } else {
    essayTextChunks.push(text.trim());
  }
  //putting the array of strings(essayTextChunks) into an array of objects(essayChunks)
  const essayChunks = essayTextChunks.map((text) => {
    const trimmedText = text.trim();
    const chunk: StringChunk = {
      content: trimmedText,
      content_length: trimmedText.length,
      gpt_tokens: encode(trimmedText).length,
    };

    return chunk;
  });
  if (essayChunks.length > 1) {
    for (let i = 0; i < essayChunks.length; i++) {
      const chunk = essayChunks[i];
      const prevChunk = essayChunks[i - 1];
      if (chunk.gpt_tokens < 200 && prevChunk) {
        prevChunk.content += " " + chunk.content;
        prevChunk.gpt_tokens = encode(prevChunk.content).length;
        essayChunks.splice(i, 1); // used to remove the chunk from the array
        i--; // used to decrement the index so that the loop doesn't skip the next chunk
      }
    }
  }
  fs.writeFileSync("laws.json", JSON.stringify(essayChunks))
  return essayChunks;
};
// const array = ChunkString();
const tp = async() =>{
  const geo =  Gps()
  console.log(geo)
}
tp()

