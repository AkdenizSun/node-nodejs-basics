import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const write = async () => {
    // Write your code here 
    try {
        const fileURL = new URL('./files/fileToWrite.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);

        const writableStream = createWriteStream(filePath);
        
        //process.stdin.pipe(writableStream);
        // writableStream.on('error', (err) => {
        //     throw new Error('FS operation failed');
        // });

        process.stdin.on('data', (chunk) => {
            writableStream.write(chunk);
        });

        process.stdin.on('end', () =>{
            writableStream.end();
        })




    } catch (error) {
        
    }
};

await write();