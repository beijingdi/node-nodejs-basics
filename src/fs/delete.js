import fs from "fs/promises";


const fileExists = async (path) => {
    try{
        await fs.access(path,fs.constants_F_OK);
        return true;
    } catch(err){
        return false;
    }
}

const remove = async () => {
    try{
        const path = './src/fs/files/fileToRemove.txt';
        const exists = await fileExists(path);
        if (!exists){
            throw new Error('FS operation failed');
        }
        await fs.unlink(path);
        return
    } catch(err){
        console.log(err);
    }
    
    // Write your code here 
};

await remove();