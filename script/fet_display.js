let fetdata = async (url) => {
  let res = await fetch(url);
  let raw = await res.json();
  return raw.meals;
};
let display = (data, cont) => {
  data.forEach((el) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.setAttribute("src", el.strMealThumb);
    img.setAttribute("class", "resimage");

    let name = document.createElement("h2");
    name.innerText = el.strMeal;

    let type = document.createElement("p");
    type.innerText = el.strCategory;
    console.log(card);
    card.append(img, name, type);
    cont.append(card);
  });
};

export { fetdata, display };
// git config --global user.email "nikhilwalwatkar81@gmail.com"
// git config --global user.name "Nikhil-81"
