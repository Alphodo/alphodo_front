import {spawn} from "child_process";
import {atob} from "next/dist/server/web/sandbox/polyfills";

export default function disease(req,res) {
    const imageb64 = req.body.image;

    const spawn = require('child_process').spawn
    //spawn으로 파이썬 스크립트 실행
    //실행할 파일(app.py)와  매개변수로 저장된 파일명을 전달
    const net = spawn('python',['/Users/spagett1maker/alphodo-finale/alphodo_model-master/alphodo_model/infer.py',imageb64]);

    //파이썬 파일 수행 결과를 받아온다
    net.stdout.on('data', function(data) {
        console.log(data);
        console.log(data.toString());
        if(data.toString() == 'nsfw')
            res.status(200).send('nsfw')
        else
            res.status(200).send('sfw')
    })
}

/*
export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};*/