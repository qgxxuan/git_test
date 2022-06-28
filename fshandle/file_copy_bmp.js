const fs = require('fs')




var checked_data = fs.readFileSync('F:\\表观数据汇总\\QIAO(22.06.13)\\乔\\250张返修.txt', 'utf8')
let arrdata ='';
let arrdata2 = [];

arrdata = checked_data.split("\r\n")
arrdata.forEach(item=>{
    arrdata2.push(item.slice(-12, -4))
})
console.log(arrdata2)






var origin_file_path = "F:\\表观数据汇总\\QIAO(22.06.13)\\乔\\第四批部分返修图修改\\第四批部分返修图";

var all_arrdata = []; // 存放所有文件路径名
var repeat_arrdata = []; // 存放需要改的、重复的文件路径名

function explorer(path){
    fs.readdir(path, function(err, files){

        //err 为错误 , files 文件名列表包含文件夹与文件
        if(err){
            console.log('error:\n' + err);
            return;
        }
        files.forEach(function(file){
            if(file.slice(-3)==='bmp'){
                all_arrdata.push(path + '\\' + file)
            }
        });
        console.log(all_arrdata)
        console.log("***********************************")
        all_arrdata.forEach(item=>{
            for(let i=0;i<arrdata2.length;i++){
                if(item.slice(-12, -4)===arrdata2[i]){
                    repeat_arrdata.push(item)
                }
            }
        })
        console.log(repeat_arrdata)
        for(let i=0;i<repeat_arrdata.length;i++){
            fs.copyFileSync(repeat_arrdata[i], 'F:\\表观数据汇总\\QIAO(22.06.13)\\乔\\返修_第四批250张_有问题'+'\\'+repeat_arrdata[i].slice(-12))
        }
        // fs.copyFileSync的两个路径参数均为文件的完整路径，即目标文件路径要加上文件后缀名，相当在目标文件夹中给复制过去的文件赋一个名字




    });
}
explorer(origin_file_path);










