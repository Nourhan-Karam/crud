var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCatageryInput = document.getElementById("productCatageryInput");
var productDescraptionInput = document.getElementById("productDescraptionInput");
var deletInput = document.getElementById("deletInput");
var serchInput = document.getElementById("serchInput");
var updutBTN = document.getElementById("updutBTN");
var addBTN = document.getElementById("addBTN");
var indexUpdut = 0;
var massageName = document.getElementById("massageName");
var massagePrice = document.getElementById("massagePrice");
var massageCatagery = document.getElementById("massageCatagery");
var massageDesc = document.getElementById("massageDesc");
// console.log(productNameInput ,productPriceInput ,productCatageryInput ,productDescraptionInput)
var listProduct = [];
if (localStorage.getItem("products") != null) {
  listProduct = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}
function addProduct() {
  if (
    validitionName() == true &&
    validitionPric() == true &&
    validitionCatagery() == true &&
    validitionDesc() == true
  ) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      catagery: productCatageryInput.value,
      desc: productDescraptionInput.value,
    };
    listProduct.push(product);
    localStorage.setItem("products", JSON.stringify(listProduct));
    displayProduct();
    clearform();
  }

  // console.log(listProduct);
}
function clearform() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCatageryInput.value = "";
  productDescraptionInput.value = "";
  productNameInput.classList.remove("is-invalid");
  productNameInput.classList.remove("is-valid");
  productPriceInput.classList.remove("is-invalid");
  productPriceInput.classList.remove("is-valid");
  productCatageryInput.classList.remove("is-valid");
  productCatageryInput.classList.remove("is-invalid");
  productDescraptionInput.classList.remove("is-valid");
  productDescraptionInput.classList.remove("is-invalid");
}
function displayProduct() {
  var cartona = "";
  var term = serchInput.value;
  //console.log(term)
  for (var i = 0; i < listProduct.length; i++) {
    if (listProduct[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartona += `<tr>
     <td>${i}</td>
     <td>${listProduct[i].name}</td>
     <td>${listProduct[i].price}</td>
     <td>${listProduct[i].catagery}</td>
     <td>${listProduct[i].desc}</td>
     <td> <button onclick="setData(${i})" class="btn btn-warning ">Updut</button>
     <button id="deletInput"onclick="deletItem(${i})" class="btn btn-danger ">Delet</button></td>
  </tr>`;
    }
  }
  document.getElementById("tabelBady").innerHTML = cartona;
}
function deletItem(index) {
  listProduct.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(listProduct));
  displayProduct();
}
function serchProduct() {
  // console.log("hell")
  displayProduct();
}
function setData(index) {
  indexUpdut = index;
  newlist = listProduct[index];
  productNameInput.value = newlist.name;
  productPriceInput.value = newlist.price;
  productCatageryInput.value = newlist.catagery;
  productDescraptionInput.value = newlist.desc;
  updutBTN.classList.remove("d-none");
  addBTN.classList.add("d-none");
}
function updutItem() {
  if (
    validitionName() == true &&
    validitionPric() == true &&
    validitionCatagery() == true &&
    validitionDesc() == true
  ) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      catagery: productCatageryInput.value,
      desc: productDescraptionInput.value,
    };
    listProduct.splice(indexUpdut, 1, product);
    localStorage.setItem("products", JSON.stringify(listProduct));
    displayProduct();
    updutBTN.classList.add("d-none");
    addBTN.classList.remove("d-none");
    clearform();
  }
}
//--------------------validation-------------
function validitionName() {
  var text = productNameInput.value;
  var ragexName = /^[A-Za-z]{2,10}$/;
  //console.log(ragex.test(text))
  if (ragexName.test(text) == true) {
    //  console.log("yes")
    productNameInput.classList.add("is-valid");
    productNameInput.classList.remove("is-invalid");
    massageName.classList.add("d-none");

    return true;
  } else {
    //  console.log("no")
    productNameInput.classList.add("is-invalid");
    productNameInput.classList.remove("is-valid");
    massageName.classList.remove("d-none");
    return false;
  }
}
function validitionPric() {
  var text = productPriceInput.value;
  var ragexPrice = /^[0-9]{2,8}$/;
  //console.log(ragex.test(text))
  if (ragexPrice.test(text) == true) {
    // console.log("yes")
    productPriceInput.classList.add("is-valid");
    productPriceInput.classList.remove("is-invalid");
    massagePrice.classList.add("d-none");
    return true;
  } else {
    //  console.log("no")
    productPriceInput.classList.add("is-invalid");
    productPriceInput.classList.remove("is-valid");
    massagePrice.classList.remove("d-none");
    return false;
  }
}
function validitionCatagery() {
  var text = productCatageryInput.value;
  var ragexCatagery = /^[A-Za-z]{2,8}$/;
  //console.log(ragex.test(text))
  if (ragexCatagery.test(text) == true) {
    // console.log("yes")
    productCatageryInput.classList.add("is-valid");
    productCatageryInput.classList.remove("is-invalid");
    massageCatagery.classList.add("d-none");

    return true;
  } else {
    //  console.log("no")
    productCatageryInput.classList.add("is-invalid");
    productCatageryInput.classList.remove("is-valid");
    massageCatagery.classList.remove("d-none");
    return false;
  }
}
function validitionDesc() {
  var text = productDescraptionInput.value;
  var ragexDesc = /^[A-Za-z]{4,100}$/;
  //console.log(ragex.test(text))
  if (ragexDesc.test(text) == true) {
    // console.log("yes")
    productDescraptionInput.classList.add("is-valid");
    productDescraptionInput.classList.remove("is-invalid");
    massageDesc.classList.add("d-none");
    return true;
  } else {
    //  console.log("no")
    productDescraptionInput.classList.add("is-invalid");
    productDescraptionInput.classList.remove("is-valid");
    massageDesc.classList.remove("d-none");
    return false;
  }
}

