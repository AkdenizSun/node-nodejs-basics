import  { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    // Write your code here 
    try {
        const fileURL = new URL('./files/fileToRemove.txt', import.meta.url);
        const filePath = fileURLToPath(fileURL);
        await rm(filePath);     
        
    } catch (error) {
        if(error.code === 'ENOENT'){
            throw new Error('FS operation failed');
        } else {
            throw error;
        }
    }
};

await remove();