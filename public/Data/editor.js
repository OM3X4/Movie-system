import { writeFileSync } from 'fs';
import { data } from "./editedData.js"

let d = [];

for(const movie of data){
    if(!movie.thumbnail){
        continue;
    }
    d.push(movie)
}

let x = new Set(d)
const dataString = JSON.stringify(Array.from(x), null, 2);

writeFileSync('output.txt', dataString);
console.log(x)