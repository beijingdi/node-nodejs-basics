const parseEnv = () => {
    // console.log("printing");
    // console.log(process.env);
    const variables = process.env;
    var res = '';
    for (let variable in variables){
        const entry = `RSS_${variable}=${variables[variable]};`;
        res = `${res} ${entry}`;
    }
    res = res.slice(1);
    console.log(res);
    // Write your code here 
};

parseEnv();