import { createReadStream } from 'fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'path';

const read = async () => {
    try {
        const fileURL = new URL('./files/fileToRead.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);


        /* const stream = createReadStream(filePath);
        stream.on('data', (chunk) => process.stdout.write(chunk));
        stream.on('end', () => console.log('\nDone')); */

        const stream  = createReadStream(filePath); //create readable stream
        stream.pipe(process.stdout); //redirect stream in standart out(like console.log)
        
        stream.on('error', (err) => {
            if (err.code === "ENOENT") {
                throw new Error('FS operation failed');
            } else {
                throw err;
            }
        });
    } catch (error) {
        
    }

};

await read();