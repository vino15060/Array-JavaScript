// array

let datamhs = ["budi", "alvino", "toni", "vino", "susi",];
console.log(datamhs);

// menampilkan data array berdasarkan index
console.log(datamhs[0]); // budi
console.log(datamhs[1]); // alvino
console.log(datamhs[2]); // toni    
console.log(datamhs[3]); // vino
console.log(datamhs[4]); // susi
console.log(datamhs[5]); // undefined

// fungsi length untuk mengetahui jumlah data array
console.log(datamhs.length); // 5

// fungsi push untuk menambahkan data array di akhir
datamhs.push("bagong");
console.log(datamhs); // ["budi", "alvino", "toni", "vino", "susi", "bagong"]

// fungsi pop untuk menghapus data array di akhir
datamhs.pop();
console.log(datamhs); // ["budi", "alvino", "toni", "vino", "susi"]

// fungsi shift untuk menghapus data array di awal
datamhs.shift();
console.log(datamhs); // ["alvino", "toni", "vino", "susi"]

// fungsi unshift untuk menambahkan data array di awal
datamhs.unshift("budi");
console.log(datamhs); // ["budi", "alvino", "toni", "vino", "susi"]

// fungsi splice untuk menghapus data array di tengah
datamhs.splice(2, 1);
console.log(datamhs); // ["budi", "alvino", "vino", "susi"]

// fungsi slice untuk menampilkan data array di tengah
let datamhs2 = datamhs.slice(1, 3);
console.log(datamhs2); // ["alvino", "vino"]

// fungsi join untuk menggabungkan data array menjadi string
let datamhs3 = datamhs.join(", ");
console.log(datamhs3); // "budi, alvino, vino, susi"

// fungsi concat untuk menggabungkan dua array
let datamhs4 = datamhs.concat(["bagong", "doni"]);
console.log(datamhs4); // ["budi", "alvino", "vino", "susi", "bagong", "doni"]

// fungsi sort untuk mengurutkan data array
let datamhs5 = datamhs.sort();
console.log(datamhs5); // ["alvino", "budi", "susi", "vino"]

// fungsi reverse untuk membalik data array
let datamhs6 = datamhs.reverse();
console.log(datamhs6); // ["vino", "susi", "budi", "alvino"]

// fungsi indexOf untuk mencari index data array
let index = datamhs.indexOf("susi");
console.log(index); // 1
