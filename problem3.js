// Problem 3 – Concurrency
// Given the sample code below, update it so the “image processing” logic is non-blocking
// to the main thread:
// const express = require(&#39;express&#39;);
// const app = express();
// app.get(&#39;/image-process&#39;, (req, res) =&gt; {
// // CPU-intensive task: image processing
// for (let i = 0; i &lt; 100000000; i++) {
// // Perform image processing operations
// }
// res.send(&#39;Image processed&#39;);
// });


const express = require('express');
const { Worker } = require('worker_threads');
const path = require('path');
const app = express();


function imageProcessing() {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'problem3_image.js')); 

    worker.on('message', resolve);  
    worker.on('error', reject);     
    worker.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

app.get('/image-process', async (req, res) => {
  try {
    const result = await imageProcessing();
    res.send(result);
  } catch (error) {
    res.status(500).send('Error to processing image');
  }
});

app.listen(3000, () => {
  console.log('Server is running');
});
