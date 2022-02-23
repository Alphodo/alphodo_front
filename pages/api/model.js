const spawn = require('child_process').spawn;

const result = spawn('python', ['../alphodo_model-master/alphodo_model/infer.py','../alphodo_model-master/images/1.jpeg']);

result.stdout.on('data', function(data) {
    console.log(data.toString());
});

result.stderr.on('data', function(data) {
    console.log(data.toString());
});
