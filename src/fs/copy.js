import fs from "fs/promises";
import path from "path";

const fileExists = async (path) => {
    try{
        await fs.access(path,fs.constants_F_OK);
        console.log('file exists');
        return true;
    } catch(err){
        console.log('file does not exists');
        return false;
    }
}

const copy = async () => {
    try{
        const folderExists = await fileExists('./src/fs/files',fs.constants_F_OK);
        const copyFolderExists = await fileExists('./src/fs/files_copy',fs.constants_F_OK);
        if (!folderExists && copyFolderExists){
            throw new Error('FS operation failed');
        }

        await fs.mkdir('./src/fs/files_copy');
        const files = await fs.readdir('./src/fs/files');
        files.forEach(async(file)=>{
            const sourcePath = path.join('./src/fs/files',file);
            const destinationPath = path.join('./src/fs/files_copy',file);
            await fs.copyFile(sourcePath,destinationPath);
        })
    } catch(err){
        console.log(err);
    }
    // Write your code here 
};

await copy();

