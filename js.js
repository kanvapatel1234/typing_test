let text=document.querySelector("#text")
let res=document.querySelector("#res")
let i=document.querySelector("#input")
let butt=document.querySelector("#butt")
let t = document.querySelector("#timer");
let re= document.querySelector("#re");
let given=document.querySelector("#given")
const paras = [
  "the sun rises in the east and sets in the west",
  "javascript is used to build interactive websites and apps",
  "practice every day to improve your typing speed and accuracy",
  "water is essential for all forms of life on planet earth",
  "coding is a valuable skill in the modern digital world",
  "the internet connects millions of people across the globe",
  "trees provide oxygen and help keep the environment clean",
  "knowledge grows when it is shared with other people"
];

const randomIndex = Math.floor(Math.random() * paras.length);
const selectedPara = paras[randomIndex];
given.innerText = selectedPara;
let x=20;
let acc;
function accuracy(){
   count=0;
   let gw=given.innerText.trim().split(/\s+/)
   let tw=text.innerText.trim().split(/\s+/)
   for(let i=0;i<tw.length;i++){
   if(gw[i]===tw[i]){
    count++
    
  }
}
acc= Math.round((count / tw.length) * 100);
}

i.disabled=true
i.addEventListener("input",()=>{
  
  text.innerText=i.value
 
  
})

    butt.addEventListener("click",(e)=>{
      i.disabled=false
      butt.disabled=true
      interval = setInterval(() => {
      t.innerText = `${x} seconds left`;
      x--;

      if (x < 0) {
       
        t.innerText = "⏰ Time's up!";
        accuracy();
        res.innerText="typing speed: "+(text.innerText.trim().split(/\s+/).length)*3+" wpm with "+acc+"% accuracy"
        i.disabled = true;

      }
    }, 1000);

    })
    re.addEventListener("click",()=>{
      window.location.reload();
    })

