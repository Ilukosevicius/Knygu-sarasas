var contador = parseInt(localStorage.getItem("contador")) || 0;
var select_opt = 0;

function add_to_list() {
  var image_url = document.querySelector(".input_image_url").value;
  var action = document.querySelector("#action_select").value,
    description = document.querySelector(".input_description").value,
    title = document.querySelector(".input_title_desc").value,
    date = document.getElementById("date_select").value;

  switch (action) {
    case "Fantasy":
      select_opt = 0;
      break;
    case "Sci-Fi":
      select_opt = 1;
      break;
    case "Mystery":
      select_opt = 2;
      break;
    case "Thriller":
      select_opt = 3;
      break;
    case "Romance":
      select_opt = 4;
      break;
    case "Westerns":
      select_opt = 5;
      break;
  }

  var class_li = [
    "list_shopping list_dsp_none",
    "list_work list_dsp_none",
    "list_sport list_dsp_none",
    "list_music list_dsp_none",
  ];

  function add_new() {
    if (t % 2 == 0) {
      document.querySelector(".cont_crear_new").className =
        "cont_crear_new cont_crear_new_active";

      document.querySelector(".cont_add_titulo_cont").className =
        "cont_add_titulo_cont cont_add_titulo_cont_active";
      t++;
    } else {
      document.querySelector(".cont_crear_new").className = "cont_crear_new";
      document.querySelector(".cont_add_titulo_cont").className =
        "cont_add_titulo_cont";
      t++;
    }
    localStorage.setItem("contador", contador);

    // Add the price input field
    var priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "Price";
    priceInput.className = "input_price";
    document.querySelector(".cont_form_sign_up").appendChild(priceInput);
  }

  var price = document.querySelector(".input_price").value;
  var cont =
    '<div class="col_md_1_list">    <p>' +
    action +
    '</p>    </div> <div class="col_md_2_list"> <h4>' +
    title +
    "</h4> <p>" +
    description +
    '</p> </div>    <div class="col_md_3_list"> <div class="cont_text_date"> <p>' +
    date +
    '</p>  </div>  <div class="cont_btns_options">    <ul>  <li><a href="#finish" onclick="finish_action(' +
    select_opt +
    "," +
    contador +
    ');" ><i class="fa-regular fa-trash-can"></i></a></li>   </ul>  </div>    </div>' +
    '<div class="col_md_5_list"><span class="price">$' +
    parseFloat(price).toFixed(2) +
    "</span></div>" + // Add the price span
    '<div class="col_md_6_list"><img src="' +
    image_url +
    '" alt="Image"></div>'; // Add the image to the list item

  function add_price(num) {
    var priceInput = document.querySelector(".li_num_" + num + " .input_price");
    var price = priceInput.value.trim();
    if (price) {
      var priceTd = document.createElement("td");
      priceTd.innerText = "$" + price;
      document.querySelector(".li_num_" + num).appendChild(priceTd);
      priceInput.value = "";
    }
  }
  var li = document.createElement("li");
  li.className = class_li[select_opt] + " li_num_" + contador;

  li.innerHTML = cont;
  document.querySelectorAll(".cont_princ_lists > ul")[0].appendChild(li);

  setTimeout(function () {
    document.querySelector(".li_num_" + contador).style.display = "block";
  }, 100);

  setTimeout(function () {
    document.querySelector(".li_num_" + contador).className =
      "list_dsp_true " + class_li[select_opt] + " li_num_" + contador;
    contador++;

    // Store data in local storage
    var data = {
      action: action,
      description: description,
      title: title,
      date: date,
      select_opt: select_opt,
      image_url: document.querySelector(".input_image_url").value,
    };
    localStorage.setItem("data_" + contador, JSON.stringify(data));
  }, 200);
}

// Retrieve data from local storage and populate the list
var contador = parseInt(localStorage.getItem("contador")) || 0;
for (var i = 0; i < contador; i++) {
  var key = "data_" + i;
  if (localStorage.getItem(key)) {
    var data = JSON.parse(localStorage.getItem(key));
    // Use the data to populate the list
    var class_li = [
      "list_shopping list_dsp_none",
      "list_work list_dsp_none",
      "list_sport list_dsp_none",
      "list_music list_dsp_none",
    ];

    var li = document.createElement("li");
    li.className = class_li[data.select_opt] + " li_num_" + contador;
    li.innerHTML = cont;
    document.querySelectorAll(".cont_princ_lists > ul")[0].appendChild(li);
    setTimeout(function () {
      document.querySelector(".li_num_" + contador).style.display = "block";
    }, 100);
    setTimeout(function () {
      document.querySelector(".li_num_" + contador).className =
        "list_dsp_true " + class_li[data.select_opt] + " li_num_" + contador;
      contador++;
    }, 200);
  }
}

function finish_action(num, num2) {
  var class_li = [
    "list_shopping list_dsp_true",
    "list_work  list_dsp_true",
    "list_sport list_dsp_true",
    "list_music list_dsp_true",
  ];
  console.log(".li_num_" + num2);
  document.querySelector(".li_num_" + num2).className =
    class_li[num] + " list_finish_state";
  setTimeout(function () {
    del_finish();
  }, 500);
}

function del_finish() {
  var li = document.querySelectorAll(".list_finish_state");
  for (var e = 0; e < li.length; e++) {
    /* li[e].style.left = "-100px"; */
    li[e].style.opacity = "0";
    li[e].style.height = "0px";
    li[e].style.margin = "0px";
  }

  setTimeout(function () {
    var li = document.querySelectorAll(".list_finish_state");
    for (var e = 0; e < li.length; e++) {
      li[e].parentNode.removeChild(li[e]);
    }
  }, 500);
}
var t = 0;
function add_new() {
  if (t % 2 == 0) {
    document.querySelector(".cont_crear_new").className =
      "cont_crear_new cont_crear_new_active";

    document.querySelector(".cont_add_titulo_cont").className =
      "cont_add_titulo_cont cont_add_titulo_cont_active";
    t++;
  } else {
    document.querySelector(".cont_crear_new").className = "cont_crear_new";
    document.querySelector(".cont_add_titulo_cont").className =
      "cont_add_titulo_cont";
    t++;
  }
}
