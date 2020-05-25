
// galery
// ambil elemen container nya
const container = document.querySelector(".container");
//ambil elemen jumbonya
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");


// kasi aksi event klik
container.addEventListener("click", function (e){

	// cek apa yg diklik adalah thumb
	if (e.target.className == "thumb") {
		jumbo.src = e.target.src;
		jumbo.classList.add("fade"); //tambah clas fade animasi
        
        // hapus class fade nya
		setTimeout(function (){
           jumbo.classList.remove("fade");
		});

		// perulangan thumb untuk opacity
		thumbs.forEach(function (thumb2){
			thumb2.className = "thumb";
		});

		// opacity active nya
		e.target.classList.add("active");
	}
});
