import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const list = async () => {

  try {
    const dirURL = new URL("./files/", import.meta.url);
    const dirPath = fileURLToPath(dirURL);

    const files = await readdir(dirPath);
    for (const file of files) console.log(file);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await list();
