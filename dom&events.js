// 1 Change text of #header-title
const headerTitle = document.getElementById("header-title");
if (headerTitle) headerTitle.textContent = "My Awesome Page";

// 2 Red border for all .product-card
document.querySelectorAll(".product-card").forEach(card => {
  card.style.border = "1px solid red";
});

// 3 Change background of <li> inside <ul class="menu">
document.querySelectorAll("ul.menu li").forEach(li => {
  li.style.backgroundColor = "lightblue";
});

// 4 Create a button and append to #controls
const btn = document.createElement("button");
btn.textContent = "Click me!";
const controls = document.getElementById("controls");
if (controls) controls.appendChild(btn)

// 5 Append structure to #cart
const cart = document.getElementById("cart");
if (cart) {
  const itemDiv = document.createElement("div");
  itemDiv.className = "item";

  const span = document.createElement("span");
  span.textContent = "Apple";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

  itemDiv.append(span, removeBtn);
  cart.appendChild(itemDiv);
}

// 6 Change src of first .avatar
const avatar = document.querySelector("img.avatar");
if (avatar) avatar.src = "https://images.unsplash.com/photo-1692100432113-75d5c8efefb3";

// 7 Add highlight to <p> inside .article-body
document.querySelectorAll(".article-body > p").forEach(p => {
  p.classList.add("highlight");
});

// 8 Toggle dark-mode on body
const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// 9 Delete .card on button click
document.querySelectorAll('button[data-action="delete"]').forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    if (card) card.remove();
  });
});


// 10 Todo List
const todoInput = document.createElement("input");
const todoAddBtn = document.createElement("button");
todoAddBtn.textContent = "Add";
document.body.append(todoInput, todoAddBtn);

const todoUL = document.createElement("ul");
document.body.appendChild(todoUL);

todoAddBtn.addEventListener("click", () => {
  if (!todoInput.value.trim()) return;
  const li = document.createElement("li");
  li.textContent = todoInput.value;

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(delBtn);
  todoUL.appendChild(li);
  todoInput.value = "";
});


// 11 Event delegation on #users-list
const usersList = document.getElementById("users-list");
if (usersList) {
  usersList.addEventListener("click", e => {
    const li = e.target.closest("li[data-user-id]");
    if (li) console.log("Clicked user ID:", li.dataset.userId);
  });
}

// 12 Counter
let count = 0;
const countSpan = document.getElementById("count");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
if (countSpan) {
  if (plusBtn) plusBtn.addEventListener("click", () => { count++; countSpan.textContent = count; });
  if (minusBtn) minusBtn.addEventListener("click", () => { if (count > 0) count--; countSpan.textContent = count; });
}

// 13 Live filter countries
const searchInput = document.getElementById("search");
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    document.querySelectorAll("li.country").forEach(li => {
      li.style.display = li.textContent.toLowerCase().includes(term) ? "" : "none";
    });
  });
}

// 14 Color picker
document.querySelectorAll(".swatch").forEach(swatch => {
  swatch.addEventListener("click", () => {
    document.body.style.backgroundColor = swatch.dataset.color;
  });
});

// 15 Sortable list
let dragged;
document.querySelectorAll("#sortable li").forEach(li => {
  li.draggable = true;
  li.addEventListener("dragstart", e => dragged = li);
  li.addEventListener("dragover", e => e.preventDefault());
  li.addEventListener("drop", e => {
    e.preventDefault();
    if (dragged && dragged !== li) {
      const parent = li.parentNode;
      parent.insertBefore(dragged, li.nextSibling);
    }
  });
});

// 16 Modal dialog
const openModalBtn = document.createElement("button");
openModalBtn.textContent = "Open Modal";
document.body.appendChild(openModalBtn);

openModalBtn.addEventListener("click", () => {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
    <button class="close">Close</button>
  `;
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => overlay.remove();
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  modal.querySelector(".close").addEventListener("click", closeModal);
});
