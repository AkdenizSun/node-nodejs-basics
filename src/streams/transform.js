import { Transform } from 'stream';

const reverseStream = new Transform({
    transform(chunk, encoding, callback){
        const transformedChunk = chunk.toString().split('').reverse().join('');
        callback(null, transformedChunk);
      }
})

const transform = async () => {

    process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();