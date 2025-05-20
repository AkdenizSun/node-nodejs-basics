import { createReadStream } from 'fs';
import{ createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    try{
        const fileURL = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);

        const hash = createHash('sha256');
        const stream =  createReadStream(filePath);

        stream.on('data', (chunk) => hash.update(chunk));

        stream.on('end', () => {
            const result = hash.digest('hex');
            console.log(result);
        });

        stream.on('error', (error) => {
            if(error.code === 'ENOENT') {
                throw new Error ('operation failed');
            } else {
                throw error;
            }
        });
    } catch (error) {
        console.error(error.message);
    }

};

await calculateHash();