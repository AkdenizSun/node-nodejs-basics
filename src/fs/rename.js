import  { rename as fs_rename, access} from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    // Write your code here 
    let src = 'wrongFilename.txt';
    let dest = 'properFilename.md';

    const srcURL = new URL('./files/' + src, import.meta.url);
    const srcPath = fileURLToPath(srcURL);
    
    const destURL = new URL('./files/' + dest, import.meta.url);
    const destPath = fileURLToPath(destURL);

    try {
        await access(destPath);
        throw new Error('FS operation failed');
    } catch (error) {
        if(error.code === 'ENOENT'){}
        else {
            throw error;
        }
    }
    

    try {
        await fs_rename(srcPath, destPath);
    
    } catch (error) {
        if(error.code === 'ENOENT'){
        
            throw new Error('FS operation failed');
        } else {
            throw error;
        }   
    }
};

await rename();