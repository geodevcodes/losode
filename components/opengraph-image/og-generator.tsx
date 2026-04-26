import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Content-Type
export const contentType = "image/png";

export type OGImageType = "home" | "marketplace" | "product";

// Main Function
export default async function generateOgImage(type: OGImageType, props: any) {
  const interSemiBold = await readFile(
    join(process.cwd(), "public/fonts/Inter-SemiBold.ttf"),
  );

  // Read the background image file
  const imageBuffer = await readFile(
    join(process.cwd(), "public/assets/opengraph-image.png"),
  );
  const base64Image = imageBuffer.toString("base64");
  const dataUrl = `data:image/png;base64,${base64Image}`;

  const styleMap = {
    home: {
      background: `url(${dataUrl})`,
      titleSize: 80,
      descSize: 40,
    },
    marketplace: {
      background: `url(${dataUrl})`,
      titleSize: 60,
      descSize: 30,
    },
    product: {
      background: `url(${dataUrl})`,
      titleSize: 70,
      descSize: 35,
    },
  };

  const { background } = styleMap[type];

  return new ImageResponse(
    <div
      style={{
        backgroundImage: background,
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        color: "white",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 60,
          maxWidth: "100%",
        }}
      ></div>
    </div>,
    {
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
