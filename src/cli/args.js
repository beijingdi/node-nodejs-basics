const parseArgs = () => {
    const argvs = process.argv.slice(2); 
    var res = ``;
    for(let i = 0; i < argvs.length; i += 2){
        let name = argvs[i].slice(2);
        let value = argvs[i+1];
        let parsed = `${name} is ${value}`;
        res = `${res}, ${parsed}`;
    }
    res = res.slice(2);
    console.log(res);
};

parseArgs();