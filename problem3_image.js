const { parentPort } = require('worker_threads');

// CPU-intensive task: image processing
for (let i = 0; i < 100000000; i++) {
  //image processing 
}


parentPort.postMessage('Image processed');
