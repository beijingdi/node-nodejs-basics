import fs from "fs/promises";


const fileExists = async (path) => {
    try{
        await fs.access(path,fs.constants_F_OK);
        return true;
    } catch(err){
        return false;
    }
}

const rename = async () => {
    try{
        const wrongFileExists = await fileExists("./src/fs/files/wrongFilename.txt");
        const properFileExists = await fileExists("./src/fs/files/properFilename.md");
        if (!wrongFileExists ||properFileExists){
            throw new Error('FS operation failed');
        }
        await fs.rename("./src/fs/files/wrongFilename.txt","./src/fs/files/properFilename.md");
        return;
    } catch(err){
        console.log(err);
    }
};

await rename();



