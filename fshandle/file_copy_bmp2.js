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


    let all_arrdata = []; // 存放所有文件路径名
    let repeat_arrdata = []; // 存放需要改的、重复的文件路径名
    fs.readdir(path1, function (err, files){
        if(err){
            console.log('error:\n' + err);
            return;
        }
        files.forEach(function(file){
            if(file.slice(-3)==='bmp'){
                all_arrdata.push(path1 + '\\' + file)
            }
        })
        console.log(all_arrdata)
        console.log("******************************")
        all_arrdata.forEach(item=>{
            for(let i=0;i<arrdata2.length;i++){
                if(item.slice(-12, -4)===arrdata2[i]){
                    repeat_arrdata.push(item)
                }
            }
        })
        console.log(repeat_arrdata)


        for(let i=0;i<repeat_arrdata.length;i++){
            fs.copyFileSync(repeat_arrdata[i], path2 + '\\' + repeat_arrdata[i].slice(-12))
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


