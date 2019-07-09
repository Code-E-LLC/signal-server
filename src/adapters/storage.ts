import fs from "fs";
import { promisify } from "util";
import { join } from "path";

// The directory relative to dist to store things
export const OUTPUT_DIRECTORY = "STORAGE";

/**
 * Wrap callback based filesystem functions in promises
 */
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const exists = promisify(fs.exists);
const stats = promisify(fs.stat);
const open = promisify(fs.open);
const mkdir = promisify(fs.mkdir);

/**
 * Asyncronous touch file
 */
export const touch = async (filePath: string) => {
  try {
    await open(filePath, "wx");
  } catch (e) {
    console.log(e);
  }
};

/**
 * Overwrite the contents of a file with provided content.
 * Returns file stats
 * @param fileName - the file to write content to
 * @param content - the content to be written
 */
export const writeToFile = async (
  fileName: string,
  content: any
): Promise<fs.Stats> => {
  try {
    const directoryPath = join(__dirname, OUTPUT_DIRECTORY);
    const filePathExist = await exists(directoryPath);

    if (!filePathExist) {
      await mkdir(directoryPath);
    }

    await writeFile(join(directoryPath, fileName), content, { flag: "w" });

    return await stats(join(directoryPath, fileName));
  } catch (e) {
    console.log(e);
  }
};

/**
 * Read the contents of a file
 * Returns a Buffer...
 * @param fileName - the file to read from
 */
export const readFromFile = async (fileName: string) => {
  try {
    return readFile(fileName);
  } catch (e) {
    console.log(e);
  }
};
