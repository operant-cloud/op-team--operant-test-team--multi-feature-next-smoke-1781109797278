import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const icon = await readFile(path.join(process.cwd(), "app", "icon.svg"));
  return new Response(icon, {
    headers: {
      "cache-control": "public, max-age=31536000, immutable",
      "content-type": "image/svg+xml",
    },
  });
}
