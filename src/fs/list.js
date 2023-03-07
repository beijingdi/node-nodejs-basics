import fs from 'fs/promises';

const fileExists = async (path) => {
    try{
        await fs.access(path,fs.constants_F_OK);
        return true;
    } catch(err){
        return false;
    }
}


const list = async () => {
    const path = './src/fs/files';
    try{
        const exists = await fileExists(path);
        if (!exists){
            throw new Error('FS operation failed');
        }
        const files = await fs.readdir(path);
        files.forEach(file => {
            console.log(file);
        });
        return;
    } catch(err){
        console.log(err);
    }
};

await list();