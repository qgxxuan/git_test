const fs = require('fs')


// var data = fs.readFileSync('C:\\Users\\qgx\\Desktop\\50张.txt', 'utf8')
// // console.log(data)
//
// let arrdata =[];
// let arrdata2 = [];
//
// arrdata = data.split("\r\n")
// arrdata.forEach(item=>{
//     arrdata2.push(item.slice(-12))
// })
//
// console.log(arrdata2)



const util = require("util")
var path = "F:\\QIAO(22.06.13)\\乔\\第三批50张";//在这里修改你要搜索的路径



function explorer(path){
    fs.readdir(path, function(err, files){
        //err 为错误 , files 文件名列表包含文件夹与文件
        if(err){
            console.log('error:\n' + err);
            return;
        }

        files.forEach(function(file){
            fs.stat(path + '\\' + file, function(err, stat){
                var arrdata = [];

                if(err){console.log(err); return;}
                if(stat.isDirectory()){
                    explorer(path + '\\' + file);
                }else{
                    // console.log(path + '\\' + file);

                    if(file.slice(-3)==='bmp'){
                        arrdata.push(file)
                    }
                    console.log(arrdata)
                    console.log(arrdata.length)

                }
            });
        });
    });
}
explorer(path);






