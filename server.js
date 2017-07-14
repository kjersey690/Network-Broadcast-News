const net = require('net');
const clients = [];



const server = net.createServer((connection)=>{
clients.push(connection);
console.log(connection.id);

function connectionListener(connection){

console.log(connection.remoteAddress);
}

 connection.on('data', data =>{
   clients.forEach(c => {
    c.write(data);
   });
   // clients.filter(c =>{
   //  c.connection(data);

   // });
   // clients.forEach(c =>{
   //  c.write(data);
   // });

 });

});

server.listen(6969, ()=>{
console.log("connected");
});

