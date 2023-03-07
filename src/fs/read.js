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
    // Write your code here 
};

await read();