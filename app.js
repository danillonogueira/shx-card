// COLLAPSE BUTTON

const collapseBtn = document.querySelector(".btn--collapse");

collapseBtn.addEventListener("click", function toggle() {
     
  // creating elements

  const collapsed = document.createElement("div");
    const collapsed__info = document.createElement("div");
      const titles = document.createElement("ul");
        const li1 = document.createElement("li");
          const span1 = document.createElement("span");
          span1.textContent = "Complemento";
        const li2 = document.createElement("li");
          const span2 = document.createElement("span");
          span2.textContent = "Telefone";
      const items = document.createElement("ul");
        const li3 = document.createElement("li");
          const span3 = document.createElement("span");
          span3.textContent = "Prédio em frente a Inthera";
        const li4 = document.createElement("li");
          const span4 = document.createElement("span");
          span4.textContent = "(16)3331-6570";
    const button = document.createElement("button");
      const i = document.createElement("i");

  // adding classes
  
  collapsed.classList.add("collapsed", "text");
    collapsed__info.classList.add("collapsed__info");
      titles.classList.add("titles");
      items.classList.add("items");
    button.classList.add("btn", "btn--collapse-return");
      i.classList.add("fas", "fa-sort-up")

  // appending

  document.querySelector(".container").appendChild(collapsed);
    collapsed.appendChild(collapsed__info);
    collapsed.appendChild(button);
      collapsed__info.appendChild(titles);
      collapsed__info.appendChild(items);
        titles.appendChild(li1);
        titles.appendChild(li2);
          li1.appendChild(span1);
          li2.appendChild(span2);
        items.appendChild(li3);
        items.appendChild(li4);
          li3.appendChild(span3);
          li4.appendChild(span4);
      button.appendChild(i);

  if (collapseBtn.classList.contains("hidden")) {
    collapseBtn.classList.remove("hidden");
  } else {
    collapseBtn.classList.add("hidden");
  }
  
  // creating collapse return button

  const collapseReturnBtn = document.querySelector(".btn--collapse-return");

  collapseReturnBtn.addEventListener("click", function untoggle() {
    document.querySelector(".container").removeChild(document.querySelector(".collapsed"));
    collapseBtn.classList.remove("hidden");
  })
 
});