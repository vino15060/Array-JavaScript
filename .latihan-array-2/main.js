// array untuk menyimpan data
let dataMhs = [];

// mengambil elemen dari HTML
let inputData = document.getElementById("inputData");
let btnTambah = document.getElementById("btnTambah");
let daftar = document.getElementById("daftar");

// fungsi untuk menampilkan data array ke halaman
function tampilkan() {
  daftar.innerHTML = "";

  for (let i = 0; i < dataMhs.length; i++) {
    let li = document.createElement("li");
    li.textContent = dataMhs[i] + " ";

    let btnHapus = document.createElement("button");
    btnHapus.textContent = "Hapus";
    btnHapus.onclick = function () {
      hapus(i);
    };

    li.appendChild(btnHapus);
    daftar.appendChild(li);
  }
}

// fungsi untuk menambah data
function tambah() {
  dataMhs.push(inputData.value);
  inputData.value = "";
  tampilkan();
  console.log(dataMhs); // tampilkan isi array di Console
}

// fungsi untuk menghapus data berdasarkan index
function hapus(index) {
  dataMhs.splice(index, 1);
  tampilkan();
  console.log(dataMhs); // tampilkan isi array di Console
}

// tombol Tambah
btnTambah.onclick = tambah;