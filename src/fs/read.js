import { fileURLToPath } from 'node:url';
import { readFile } from "node:fs/promises";


const read = async () => {
    // Write your code here 
    try {

        const fileURL = new URL('./files/fileToRead.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
        
    } catch (error) {
        if(error.code === 'ENOENT'){
            throw new Error('FS operation failed');
        } else {
            throw error;
        } 
    }
};

await read();