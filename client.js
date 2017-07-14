const net = require('net');


const options ={
  host: "localhost",
  port: 6969
};

const clientConnection = net.createConnection(options,() =>{
console.log(clientConnection.address()
  );


// clientConnection.write('whats up');
process.stdin.on('data', data => {
  clientConnection.write(data);

  });
clientConnection.on('data', data =>{
  console.log(data);
   console.log(data.toString());



  });
});
