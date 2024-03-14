const richest = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault",
  "Mark Zuckerberg",
  "Bill Gates",
  "Steve Ballmer",
  "Warren Buffett",
  "Larry Ellison",
  "Larry Page",
  "Sergey Brin",
];
const richest1 = [
  "Elon Musk",
  "Jeff Bezos",
  "Bernard Arnault",
  "Mark Zuckerberg",
  "Bill Gates",
  "Steve Ballmer",
  "Warren Buffett",
  "Larry Ellison",
  "Larry Page",
  "Sergey Brin",
];

const persons = document.getElementsByClassName("person");

const col2 = document.getElementsByClassName("col2");

const checkBtn=document.getElementById('check');

let dragItem,dropItem;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function check(){
  for(i=0;i<10;i++){
    if(col2[i].innerText==richest[i]){
      col2[i].classList.add("green")
    }else{
      col2[i].classList.add("red")
    };
  };
}

function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  //console.log(ev);
  ev.dataTransfer.setData("text/plain", ev.target.id);
  dragItem=ev.target;
  console.log(dragItem);
  
  console.log(dropItem);
}




window.addEventListener("DOMContentLoaded", () => {
  
  const arr = shuffle( richest1 );
  //console.log(arr); 
  
  for (i = 0; i < persons.length; i++) {
    col2[i].innerText = arr[i];
    col2[i].setAttribute('draggable',true)
    col2[i].addEventListener("dragstart",dragstartHandler)
    col2[i].addEventListener("dragover",(ev)=>{ev.target.classList.add("dragOver");dropItem=ev.target})
    col2[i].addEventListener("dragleave",(ev)=>{ev.target.classList.remove("dragOver")});
    col2[i].addEventListener("drop",(event)=> {
      event.preventDefault();
      dropItem=event.target;
      dragItem.parentNode.removeChild(dragItem);
      dragItem.appendChild(dropItem);
      event.target.appendChild(dragItem);
    })
  }
    
});
// 1. Elon Musk 2. Jeff Bezos 3. Bernard Arnault 4. Mark Zuckerberg
// 5. Bill Gates 6. Steve Ballmer 7. Warren Buffett 8. Larry Ellison
// 9. Larry Page 10. Sergey Brin
