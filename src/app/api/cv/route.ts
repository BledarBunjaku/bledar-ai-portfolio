import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const file = await readFile(path.join(process.cwd(), "public", "docs", "Bledar_Bunjaku_Software_Engineer_CV.pdf"));

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Bledar-Bunjaku-CV.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
