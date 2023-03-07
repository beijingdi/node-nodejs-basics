import fs from "fs/promises";


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

const create = async () => {
    console.log(process.cwd());
    try{
        const exist = await fileExists('./src/fs/files/fresh.txt');
        if (exist) {
            throw new Error('FS operation failed');
        }
        await fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young');
    }catch(err){
        console.log(err);
    }
};


await create();


