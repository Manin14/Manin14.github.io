// spread operator
// titik 3 / [...nama]
// memecah iterables menjadi single element

// const mhs = ["manin","jaka","adi"];
// console.log(mhs);
// console.log(...mhs);
// console.log(...mhs[0]);


// // untuk menggabungkan array
// const dosen = ["ade","hendra","wanda"];

// const orang1 = [...mhs, ...dosen];
// const orang = [...mhs,"aji", ...dosen];
// console.log(orang1); 
// console.log(orang); 


// // untuk meng copy array
// const siswa = ["jakas","adi","umar"];
// const siswa2 = [...siswa];

// siswa2[0] = "manin";

// console.log(siswa);
// console.log(siswa2);



// hover
// const liMhs = document.querySelectorAll("li");
// //console.log(liMhs);

// const mhsNew =[...liMhs].map(m => m.texContent);
// console.log(mhsNew);



// hover, css, tansisi
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map(h => `<span> ${h} </span>`).join("");

//console.log(huruf);
nama.innerHTML = huruf;

// tombol acak warna
const ubahWarna = document.getElementById("tUbahWarna");
ubahWarna.addEventListener("click", function (){
  // warna random

	const r = Math.round(Math.random() * 255 + 1); // angka bulat, tdk akan kurang dari 1, dan leih dari 255
    const g = Math.round(Math.random() * 255 + 1); //round itu method pembulatan angka
    const b = Math.round(Math.random() * 255 + 1); // Math itu method random

    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")";
});

