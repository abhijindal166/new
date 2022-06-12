
// // // const exec  = require('child_process').exec;
// // const shell=require("shelljs");
// // var version = shell.exec('ls', {silent:true}).stdout;
// // console.log(version+"out");
// // var yourscript = execFile('ls',[ '-ltr'],
// //         (error, stdout, stderr) => {
// //             console.log(stdout);
// //             console.log(stderr);
// //             if (error !== null) {
// //                 console.log(`exec error: ${error}`);
// //             }
// //         });


// // // const { spawn } = require('child_process');
// // // const child = spawn('ls', );
// // // // use child.stdout.setEncoding('utf8'); if you want text chunks
// // // child.stdout.on('data', (chunk) => {
// // //   // data from the standard output is here as buffers
// // // });
// // // // since these are streams, you can pipe them elsewhere
// // // child.stderr.pipe(dest);
// // // child.on('close', (code) => {
// // //   console.log(`child process exited with code ${code}`);
// // // });

// // const exec = require('child_process').exec
// // const myShellScript = exec('shellscript.sh /C:\Users\abhij\Desktop\shell\server\shellscript.sh');
// // myShellScript.stdout.on('data', (data)=>{
// //     console.log(data); 
// //     // do whatever you want here with data
// // });
// // myShellScript.stderr.on('data', (data)=>{
// //     console.error(data);
// // });

// // const { spawn } = require('node:child_process');
// // const ls = spawn( 'shellscript.sh', [], {shell: true});


// // ls.stdout.on('data', (data) => {
// //   console.log(`stdout: ${data}`);
// // });

// // ls.stderr.on('data', (data) => {
// //   console.error(`stderr: ${data}`);
// // });

// // ls.on('close', (code) => {
// //   console.log(`child process exited with code ${code}`);
// // });
// // const { exec } = require("child_process");
// // exec('hi.sh', (error, stdout, stderr) => {
// //   // catch err, stdout, stderr
// //     if (error) {
// //         console.log('Error in removing files');
// //         return;
// //     }
// //     if (stderr) {
// //         console.log('an error with file system');
// //         return;
// //     }
// //     console.log('Result of shell script execution',stdout);
// // });


// const express = require('express')
// const { exec } = require('child_process')
// const { join } = require('path')


// const app = express()

// app.use(express.static(join(__dirname, 'static')))

// app.get('/hello', (req, res) => {
//   exec(join(__dirname, 'hello.sh'), (err, stdout, stderr) => {
//     if (err) {
//       return res.status(400).json({ output: null, error: err.message })
//     }

//     res.status(200).json({ output: stdout, error: null })
//   })
// })

// app.listen(port, () => {
//   console.log('server listening on port', port)
// })

const shell = require('shelljs')

const st=shell.exec('sh hi.sh').stdout;
console.log(st+"this");