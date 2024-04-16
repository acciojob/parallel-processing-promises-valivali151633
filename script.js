const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");
// console.log("hello")

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let data = images.map((imgage) =>{
    return new Promise((resolve , reject) =>{
        resolve(imgage.url);
    
  });
});


btn.addEventListener("click", async ()=>{
 Promise.all(data)
 .then((result) => {
    result.forEach((url) => {
        const img= document.createElement("img");
        img.src = url;
        output.appendChild(img);
    });
 })
 .catch((error) => { 
    console.error("Error" , error);
 });

})
