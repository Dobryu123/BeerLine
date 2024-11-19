window.addEventListener("resize", AutoScale); // Масштабируем страницу при растягивании окна
var scale;
var item = document.getElementsByClassName("catalog_item");
let i = 0;
let k = 0;
let j = 0;

function AutoScale() {
  let width = window.innerWidth; // Ширина окна
  if (width < 1200) {
    currentIndex = i;
    if (scale === "Big") {
      itemsPerView = 2;
      item[i].classList.add("hidden_item");
      item[i + 1].classList.remove("hidden_item");
      scale = "Middle";
    } else {
      if (i > 4) {
        k = 1;
      } else {
        k = 0;
      }
      j = 1;
    }
  } else {
    currentIndex = i;
    if (i < 0) {
      i = 2;
      item[0 + i].classList.remove("hidden_item");
      i = 0;
    } else {
      item[0 + i].classList.remove("hidden_item");
    }
    scale = "Big";
    k = 1;
    if (i < 2) {
      j = 1;
    } else {
      j = 0;
    }
    itemsPerView = 3;
  }
}

let currentIndex = 0; // Индекс текущего первого видимого элемента
const items = document.querySelectorAll(".catalog_item");
let itemsPerView = 3; // Количество видимых элементов одновременно

function updateCatalog() {
  items.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + itemsPerView) {
      item.classList.remove("hidden_item"); // Показываем элемент
    } else {
      item.classList.add("hidden_item"); // Скрываем элемент
    }
  });
}

function Catalog_left() {
  if (currentIndex > 0) {
    if (j == 0 && scale === "Middle") {
      currentIndex -= 2;
      j++;
      k++;
    } else {
      currentIndex--;
    }
    updateCatalog();
    i--;
  }
  if (currentIndex === 0) updateCatalog();
}

function Catalog_right() {
  if (currentIndex < items.length - itemsPerView) {
    if (k == 0 && scale === "Middle") {
      currentIndex += 2;
      k++;
      j++;
    } else {
      currentIndex++;
    } // Двигаем индекс вправо
    updateCatalog();
    i++;
  }
}
var N = 0;
function phone_mask() {
  var phone = document.getElementById("phone");
  var symbol = phone.value;
  var pattern = /[A-Za-zА-Яа-яЁё\s]/;
  if (symbol.split("+").length > 1) {
    if (symbol.length == 7 && N == 0) {
      phone.value += ") ";
      N++;
    }
  } else {
    phone.value = "+7 (9" + symbol;
  }
  if (symbol.length < 7) {
    N = 0;
  }
  if (symbol.length == 12 && N == 1) {
    phone.value += " ";
    N--;
  }
  if (symbol.length == 15 && N == 0) {
    phone.value += " ";
    N++;
  }
}

function Call_Me() {
  var Name = document.getElementById("name").value;
  var tel = document.getElementById("phone").value;
  if (Name == "" || Name == "Введите имя") {
    alert("Вы не ввели имя");
    return false;
  } else if (tel.length < 18 || tel == "+7 (9__) ___-__-__") {
    alert("Вы ввели некорректный номер телефона");
    return false;
  } else {
    return true;
  }
}
window.addEventListener("resize", MapScale);
function MapInfoScale() {
  const map1 = document.getElementsByTagName("iframe");
  var map_info = document.getElementById("map_info");
  map_info.style.width = map1[0].getAttribute("width");
  console.log(map_info);
}
function MapScale() {
  const Base_width = 1920;
  let width = window.innerWidth;
  var map = document.getElementsByTagName("iframe");
  map[0].setAttribute("width", (width / Base_width) * 1200 + "px");
  MapInfoScale();
}
setTimeout(MapScale(), 5000);
setTimeout(MapInfoScale(), 5000);
