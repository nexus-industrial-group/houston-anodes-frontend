import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "downloadables");
    const files = await fs.promises.readdir(dir);
    const pdfFiles = files.filter((f) => f.toLowerCase().endsWith(".pdf"));
    return NextResponse.json({ files: pdfFiles });
  } catch (error) {
    return NextResponse.json({ files: [] }, { status: 500 });
  }
}
