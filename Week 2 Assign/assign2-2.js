const fs = require('fs');
const path = require('path');
const util = require('util');
const target="test"
const sol=(dir)=>{
    let res;
    try{
        res=fs.readdirSync(dir)
    }
    catch(err)
    {
        console.error(err)
    }
    if(!res.length)
        return
    let _file=[]
    let _dir=[]
    for(let i=0;i<res.length;i++)
    {
        if(path.extname(dir+"/"+res[i])===".js")
        {
            //when .js
            _file.push(res[i])
        }
        else if(!path.extname(dir+"/"+res[i]))
        {
            if(res[i]==".DS_Store")
                continue
            //when directory
            _dir.push(res[i])
        }
    }
    for(let i=0;i<_file.length;i++)
        console.log(dir+"/"+_file[i])
    for(let i=0;i<_dir.length;i++)
        sol(dir+"/"+_dir[i])
    
}
sol(target)