function dragstartHandler(ev) {
  // Add the target element's id to the data transfer object
  console.log(ev);
  ev.dataTransfer.setData("text/plain", ev.target.id);
}

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

window.addEventListener("DOMContentLoaded", () => {
  const persons = document.getElementsByClassName("person");
  const col2 = document.getElementsByClassName("col2");
  const arr = shuffle( richest );
  console.log(arr); 
  
  for (i = 0; i < persons.length; i++) {
    persons[i].addEventListener("dragstart", dragstartHandler);
    col2[i].innerText = arr[i];
  }
});
// 1. Elon Musk 2. Jeff Bezos 3. Bernard Arnault 4. Mark Zuckerberg
// 5. Bill Gates 6. Steve Ballmer 7. Warren Buffett 8. Larry Ellison
// 9. Larry Page 10. Sergey Brin
