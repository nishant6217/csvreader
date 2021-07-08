const express = require('express');
const app = express();
const port =8000;
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('../a.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });



app.listen(port,function(err){
    if(err){
        console.log("error in firing server" , err)

    }
    console.log(`server is running on port ${port}`)
})