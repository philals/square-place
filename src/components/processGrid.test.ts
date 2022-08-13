import { Color } from "@prisma/client";
import { expect, test } from "vitest";
import { toHex } from "./colorToHex";
import { GridsOfPixels, processGrid } from "./processGrid";

// Edit an assertion and save to see HMR in action

test("Math.sqrt()", () => {
  const result = processGrid(apiGrids);

  expect(result[0]!.length).toBe(16);
  expect(result[0]![0]).toBe(toHex(Color.CyberGreen));
  expect(result[0]![1]).toBe(toHex(Color.CyberGreen));
  expect(result[0]![2]).toBe(toHex(Color.CyberGreen));
  expect(result[0]![3]).toBe(toHex(Color.CyberGreen));
  expect(result[0]![4]).toBe(toHex(Color.DarkGreen));
  expect(result[0]![5]).toBe(toHex(Color.DarkGreen));
  expect(result[0]![6]).toBe(toHex(Color.DarkGreen));
  expect(result[0]![7]).toBe(toHex(Color.DarkGreen));
  expect(result[0]![8]).toBe(toHex(Color.LightPurple));
  expect(result[0]![9]).toBe(toHex(Color.LightPurple));
  expect(result[0]![10]).toBe(toHex(Color.LightPurple));
  expect(result[0]![11]).toBe(toHex(Color.LightPurple));
  expect(result[0]![12]).toBe(toHex(Color.NaveyPurple));
  expect(result[0]![13]).toBe(toHex(Color.NaveyPurple));
  expect(result[0]![14]).toBe(toHex(Color.NaveyPurple));
  expect(result[0]![15]).toBe(toHex(Color.NaveyPurple));
});

const apiGrids: GridsOfPixels = [
  {
    pixels: [
      {
        id: "cl6m00ij80150ewdyt6d5pk9x",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90151ewdy1sheyxy6",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90152ewdyw1w7z5r1",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90153ewdyalsfu0b2",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90154ewdy1lzh1jho",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90155ewdyivknu5b3",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90156ewdyyp2s7sc3",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90157ewdyzrcojp14",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90158ewdy0fdy1ugq",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90159ewdy4pyn1zkc",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90160ewdyua0j2vad",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90161ewdyerzb6z26",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90162ewdycuwm78yl",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90163ewdyqlwqoshm",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90164ewdypflqal4v",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
      {
        id: "cl6m00ij90165ewdyjonwyo61",
        color: "CyberGreen",
        version: 1,
        gridId: "cl6m00hu90143ewdy2ywic179",
      },
    ],
  },
  {
    pixels: [
      {
        id: "cl6m00jmk0175ewdygxag82bz",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0176ewdylteo74ov",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0177ewdyfxk2u8pg",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0178ewdyzupbbi32",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0179ewdyoozee2k4",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0180ewdy2iq8xikf",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0181ewdy77hrfpq6",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0182ewdyqxg0mk1h",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0183ewdyx8598ghs",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0184ewdyze6xwsf3",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0185ewdytiyothye",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0186ewdyw55rj3d1",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0187ewdy4l5ug2xi",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0188ewdyxy7h70oc",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0189ewdyfukqffpw",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
      {
        id: "cl6m00jmk0190ewdyt9kth1p0",
        color: "DarkGreen",
        version: 1,
        gridId: "cl6m00j2x0168ewdyqylstrdc",
      },
    ],
  },
  {
    pixels: [
      {
        id: "cl6m00kpr0200ewdygqle57ra",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0201ewdy2k4zm1mq",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0202ewdyay4p40io",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0203ewdyq329zpa7",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0204ewdydoddgmr3",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0205ewdy05g8v27e",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0206ewdynzioc7aq",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0207ewdyizknveis",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0208ewdyv59jdx9m",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0209ewdyaxvvh9ue",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0210ewdyvmops4io",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0211ewdy2gw3tplt",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0212ewdynfz1p8dn",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0213ewdyvgpafuuu",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0214ewdydkia0upb",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
      {
        id: "cl6m00kpr0215ewdytq5apyal",
        color: "LightPurple",
        version: 1,
        gridId: "cl6m00k640193ewdys52d0uqo",
      },
    ],
  },
  {
    pixels: [
      {
        id: "cl6m00lo80225ewdymhwv2ohw",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80226ewdylhlo8dlp",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80227ewdyltla6ix7",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80228ewdyk8rf85yf",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80229ewdy5rqwx5xd",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80230ewdy34lo1eyg",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80231ewdy34gorgr3",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80232ewdyygn05qlc",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80233ewdyc5xvk8n1",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80234ewdy1amphyy1",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80235ewdy281yni5c",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80236ewdyzukysbit",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80237ewdyjzmhefqq",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80238ewdy21vfxrzo",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80239ewdyyqcqy9dp",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
      {
        id: "cl6m00lo80240ewdykijv6het",
        color: "NaveyPurple",
        version: 1,
        gridId: "cl6m00l4g0218ewdyehsb2tim",
      },
    ],
  },
  {
    pixels: [
      {
        id: "cl6m00mmg0250ewdyfc4dgth9",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0251ewdyh0p4vh1t",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0252ewdy2y0dgu1a",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0253ewdy60bsgc85",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0254ewdyib18dqb1",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0255ewdyeavf6ly4",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0256ewdyyt1y0is8",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0257ewdyi8t2sflf",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0258ewdy1zmowuug",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0259ewdyids3x0z0",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0260ewdyfca9zy01",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0261ewdyq1pknsy0",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0262ewdyka31z9he",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0263ewdyiz0rv8zo",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0264ewdydein0gd8",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
      {
        id: "cl6m00mmg0265ewdy8udv5ydy",
        color: "Purple",
        version: 1,
        gridId: "cl6m00m2w0243ewdyz7775ftp",
      },
    ],
  },
];
