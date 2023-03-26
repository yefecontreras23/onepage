document.addEventListener("click",function(e){
	if (e.target.matches(".enlace")) {
		var enlaces=[]
		enlaces=document.querySelectorAll(".enlace")
		// efectos //
		for (var i = 0; i < enlaces.length; i++) {
			enlaces[i].classList.remove("active")
		}
		enlaces[e.target.dataset.id].classList.add("active")
		setTimeout(function(){
			enlaces[e.target.dataset.id].classList.add("animacionenlace")
		},200)
		setTimeout(function(){
			enlaces[e.target.dataset.id].classList.remove("animacionenlace")
		},1500)

	}else if(e.target.matches(".titulo")){
		location.reload()
	}
})

document.querySelector("#btn-menu-bars").onclick=()=>{
	let menudesplegable=document.querySelector(".menu-toggle")
	menudesplegable.classList.toggle("toggle-dz")
}

document.querySelector("#formweb").onsubmit=(e)=>{
	e.preventDefault()
	let username=document.querySelector("#nameuser").value
	if (username=="") {username="..."} else {}
	alert("mensaje de "+ username +" enviado")
	document.querySelector("#nameuser").value=""
	document.querySelector("#nameadress").value=""
	document.querySelector("#msguser").value=""
}

// slider
window.addEventListener("load",function(){
	var slides=document.querySelectorAll(".slide")
	var slider=document.querySelector(".slider")
	var nslide=0
	var delay=true
	document.querySelector(".slider-right").onclick=()=>{
		slides[nslide].classList.remove("active")
		nslide+=1
		if (nslide>slides.length-1) {
			nslide=0
		}
		slides[nslide].classList.add("active")
		slider.style.transform=`translateY(${-nslide*100}%)`
		delay=false
	}
	document.querySelector(".slider-left").onclick=()=>{
		slides[nslide].classList.remove("active")
		nslide-=1
		if (nslide<0) {
			nslide=slides.length-1
		}
		slides[nslide].classList.add("active")
		slider.style.transform=`translateY(${-nslide*100}%)`
		delay=false
	}

	setInterval(function(){
		if (delay===false) {
			delay=true
		} else {
			slides[nslide].classList.remove("active")
			nslide+=1
			if (nslide>slides.length-1) {
				nslide=0
			}
			slides[nslide].classList.add("active")
			slider.style.transform=`translateY(${-nslide*100}%)`	
		}
	},6000)
})

var menu=document.querySelectorAll(".enlace")
for (const enlace of menu) {
	// console.log(enlace.dataset.id)
	enlace.addEventListener("click",function(event){
		event.preventDefault()
		let offsettop=document.querySelector(enlace.dataset.href).offsetTop
		let newscroll=0
		var intscroll=setInterval(function(){
			if (window.scrollY>=offsettop) {
				window.scrollTo(0,newscroll)
				clearInterval(intscroll)
			} else {
				newscroll+=offsettop/20+.5
				window.scrollTo(0,newscroll)
			}
			// console.log(window.scrollY+"-"+offsettop)
		},20)
		setTimeout(function(){document.querySelector(".menu-toggle").classList.remove("toggle-dz")},2000)
	})
}

window.addEventListener("scroll",function(){
	var alt=document.querySelector("#Servicios").offsetTop
	var btnUp=document.querySelector(".btn-up")
	if (window.scrollY>alt-100) {
		btnUp.classList.add("show-btn-up")
	} else {
		btnUp.classList.remove("show-btn-up")
	}
	btnUp.onclick=()=>{
		var up=setInterval(function(){
		let altup=document.documentElement.scrollTop
			if (window.scrollY<=0) {
				clearInterval(up)
			} else {
				window.scrollTo(0,altup-altup/20)
			}
		},10)
	}
	// btn up //
	// effect pry

	//menu estatico//
	if (screen.width>650) {
		let altitud=document.querySelector("#Servicios").offsetTop
		let menu=document.querySelector(".container header")
		if (window.scrollY>altitud-100) {
			menu.classList.add("menufix")
		}
		else{
			menu.classList.remove("menufix")
		}
	}else{
		if(document.querySelector(".container header").classList.contains("menufix")){menu.classList.remove("menufix")}
	}

	// efecto fade proyectos
	var proyecto=document.querySelectorAll(".proyecto")
	if (window.scrollY>alt-500) {
		let delay=0
		for (var i = 0; i < proyecto.length; i++) {
			proyecto[i].style.opacity=1
			proyecto[i].style.transition=`all 1s ease ${delay}s`
			delay+=0.5
		}
	}
})

// animation body
// document.querySelector("body").addEventListener("click",(e)=>{
// 	let nspan=document.createElement("span")
// 	let coorX=e.clientX
// 	let coorY=e.clientY
// 	nspan.classList.add("spananimado")
// 	nspan.style.left=coorX + "px"
// 	nspan.style.top=coorY + "px"

// 	document.querySelector("body").appendChild(nspan)
// 	setTimeout(function(){
// 		nspan.remove()
// 	},3000)
// })



// document.querySelector(".sapo").onclick=()=>{
// 	var sapo=document.querySelector(".sapo")
// 	setTimeout(function(){
// 		sapo.classList.add("animacionsapo")
// 	},200)
// 	setTimeout(function(){
// 		sapo.classList.remove("animacionsapo")
// 	},1500)
// }

// scroll  scrollTo()