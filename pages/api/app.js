const express = require("express");
const app = express();
const path = require('path');
const multer = require('multer');
const port = 3002;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const uploader = multer({
    storage: multer.diskStorage({
        destination(req,file,cb){
            cb(null, 'upload/');
        },
        filename(req,file,cb){
            const ext = path.extname(file.originalname);
            cb(null, 'file_'+Date.now()+ext);
        }
    }),
    limits: {fileSize: 5*1024*1024},
});
const spawn = require('child_process').spawn

app.post('/', uploader.single('image'),async(req,res)=>{
    //spawn으로 파이썬 스크립트 실행
    //실행할 파일(app.py)와  매개변수로 저장된 파일명을 전달
    const net = spawn('python',['/Users/spagett1maker/alphodo-finale/alphodo_model-master/alphodo_model/infer.py',req.file.filename]);

    //파이썬 파일 수행 결과를 받아온다
    net.stdout.on('data', function(data) {
        console.log(data);
        console.log(data.toString());
        if(data.toString() == 'nsfw')
            res.status(200).send('nsfw')
        else
            res.status(200).send('sfw')
    })
})

app.listen(port, () => {
    console.log('llllllllistening on *:3002');
});