const express = require("express");

const app = express();

app.use(express.json());
const fs=require("fs");
const cors = require("cors");
app.use(cors());


const shell = require('shelljs')

app.get('/', (req, res) => {
 
    })
  
app.post("/send", async (req, res) => {
    console.log(req.body.file1);
    console.log(req.body.file2);
   
    fs.writeFile('pre.txt',req.body.file1, function(err) {
        if(err) {
            return console.log(err);
        }
       
})
fs.writeFile('post.txt',req.body.file2, function(err) {
    if(err) {
        return console.log(err);
    }
   
})
const st=shell.exec('sh hi.sh').stdout;
console.log(st);

res.status(200).json({ output: st, error: null })
});
// fs.readFile('shellscript.sh', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     // console.log(data);
//     var mydata = data.toString();
//     // exec(mydata, function(err, stdout, stderr) {
//     //     console.log(mydata+"this is data");
//     //     if (!err) console.log("No error: ", stdout);
//     // });
//   });
//   exec("echo START", function(err, stdout, stderr) {
// 	if (!err) console.log("No error: ", stdout);
// });
// var child;
// child = exec('ls -lh', function (error, stdout, stderr) {
    
//     // console.log(stderr);
//     console.log("helo");
//     if (error !== null) {
//         console.log('exec error: ' + error);
//     }
//     console.log(stdout+"output");
// });

// exec("shellscript.sh", function(err, stdout, stderr) {
//     if (!err) console.log("No error: ", stdout);
//     console.log(stdout+"output");
// });

// fs.writeFile('pre.txt',req.body)
// const { spawn } = require('node:child_process');
// const ls = spawn( 'shellscript.sh', [], {shell: true})


// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });
// app.get('/hello', (req, res) => {
//     exec(join(__dirname, 'hello.sh'), (err, stdout, stderr) => {
//       if (err) {
//         return res.status(400).json({ output: null, error: err.message })
//       }
  
//       res.status(200).json({ output: stdout, error: null })
//     })
//   })
  
app.listen(8000, () => {
    console.log("server connected");
  });