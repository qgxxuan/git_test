const fs = require('fs')



function readfile(txtpath, path1, path2){
    let checked_data = fs.readFileSync(txtpath, 'utf8')
    let arrdata ='';
    let arrdata2 = [];
    arrdata = checked_data.split("\r\n")
    arrdata.forEach(item=>{
        arrdata2.push(item.slice(-12, -4))
    })
    console.log(arrdata2) // arrdata2为txt文件中用于匹配的文件名


    let all_bmp_arrdata = []; // 存放所有的bmp文件路径名 bmp
    let repeat_bmp_arrdata = []; // 存放需要改的、重复的bmp文件路径名 bmp
    let all_json_arrdata = []; // 存放所有的json文件路径名 json
    let repeat_json_arrdata = []; // 存放需要改的、重复的额json文件路径名 json

    fs.readdir(path1, function (err, files){
        if(err){
            console.log('error:\n' + err);
            return;
        }
        files.forEach(function(file){
            if(file.slice(-3)==='bmp'){
                all_bmp_arrdata.push(path1 + '\\' + file)
            }else{
                all_json_arrdata.push(path1 + '\\' + file)
            }
        })
        console.log(all_bmp_arrdata)
        console.log(all_json_arrdata)
        console.log("*************************************************")
        all_bmp_arrdata.forEach(item=>{
            for(let i=0;i<arrdata2.length;i++){
                if(item.slice(-12, -4)===arrdata2[i]){
                    repeat_bmp_arrdata.push(item)
                }
            }
        })
        all_json_arrdata.forEach(item=>{
            for(let i=0;i<arrdata2.length;i++){
                if(item.slice(-13, -5)===arrdata2[i]){
                    repeat_json_arrdata.push(item)
                }
            }
        })
        console.log(repeat_bmp_arrdata)
        console.log(repeat_json_arrdata)


        for(let i=0;i<repeat_bmp_arrdata.length;i++){
            fs.copyFileSync(repeat_bmp_arrdata[i], path2 + '\\' + repeat_bmp_arrdata[i].slice(-12))
        }
        for(let i=0;i<repeat_json_arrdata.length;i++){
            fs.copyFileSync(repeat_json_arrdata[i], path2 + '\\' + repeat_json_arrdata[i].slice(-13))
        }
    })

}


// txtpath 记录的txt文件路径
// origin_file_path 源标注文件夹路径
// picked_file_path 放入检查图片的目标文件夹

let txtpath = 'C:\\Users\\qgx\\Desktop\\标注文件复制测试\\50张返修测试.txt'
let origin_file_path = "C:\\Users\\qgx\\Desktop\\标注文件复制测试\\第三批部分返修图测试";
let picked_file_path = "C:\\Users\\qgx\\Desktop\\标注文件复制测试\\返修_第三批50张_有问题测试"

readfile(txtpath, origin_file_path, picked_file_path)





// git test  git test  git test

