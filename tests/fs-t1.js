/**
 * Created by dcg on 16/10/8.
 */
var fs = require('fs');
var path = require('path');
//===小文件拷贝

function copy(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}
// copy(`${process.cwd()}/doc/t1.json`,`${process.cwd()}/doc/t1copy.json`);

//===大文件拷贝

function copyBig(src, dst) {
    fs.createReadStream(src).pipe(fs.createWriteStream(dst));
}
// copyBig(`${process.cwd()}/doc/t1.json`,`${process.cwd()}/doc/t1copy.json`);
//===文件读写
function readOrWrite() {
    fs.readFile(path.join(process.cwd(),'doc/t1.json'), function (err, data) {
        console.log(data.toString());
        fs.writeFile(`${process.cwd()}/doc/t1.json`, '{"c":"d"}', function (errw) {
            if (errw) throw errw;
            console.log("success");
        });
    });
}
