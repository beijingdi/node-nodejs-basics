import fs from "fs/promises";


const fileExists = async (path) => {
    try{
        await fs.access(path,fs.constants_F_OK);
        return true;
    } catch(err){
        return false;
    }
}


const read = async () => {
    const path = './src/fs/files/fileToRead.txt';
    try{
        const exists = await fileExists(path);
        if (!exists){
            throw new Error('FS operation failed');
        }
        const data = await fs.readFile(path,'utf8');
        console.log(data);
    } catch(err){
        console.log(err);
    }
  
 
};

await read();