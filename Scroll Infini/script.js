const gridContainer = document.querySelector(".grid-container");
const watcher = document.querySelector(".intersection-watcher");

const fetchData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  return data;
};

const addContent = async () => {
  const data = await fetchData();

  data.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h2>${post.title}</h2>`;
    gridContainer.appendChild(card);
  });
};

const handleIntersect = entries => {
  console.log(entries);
  if (entries[0].isIntersecting) {
    addContent();
  }
};

const options = {
  // root: null
  // threshold: 1
  // rootMargin: "-20% 0px"
}
new IntersectionObserver(handleIntersect, options).observe(watcher);


// Ancienne façon de faire peu performante
// window.addEventListener("scroll", () => {
  
//   console.log(document.body.getBoundingClientRect());
// })