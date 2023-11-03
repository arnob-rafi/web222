


window.onload = function() {
  
  var heading2 = document.getElementById("heading2");
  var h2 = document.createElement("h2");
  h2.textContent = "Country List";
  heading2.appendChild(h2);

  
  var tableDiv = document.getElementById("table");
  var table = document.createElement("table");
  table.style.border = "1px solid black";

  
  var thead = document.createElement("thead");
  var tr = document.createElement("tr");
  var th1 = document.createElement("th");
  th1.textContent = "Country";
  var th2 = document.createElement("th");
  th2.textContent = "Capital";

  tr.appendChild(th1);
  tr.appendChild(th2);
  thead.appendChild(tr);
  table.appendChild(thead);

  
  var tbody = document.createElement("tbody");

  for (var i = 0; i < countries.length; i++) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = countries[i].Name;
    var td2 = document.createElement("td");
    td2.textContent = countries[i].Capital;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  tableDiv.appendChild(table);

  
  var flagImagesLink = document.getElementById("flag-images");
  var flagsDiv = document.getElementById("flags");

  flagImagesLink.addEventListener("click", function() {
    for (var j = 0; j < countries.length; j++) {
      var img = document.createElement("img");
      var imgSrc = "./flags/" + countries[j].Name + "-flag.png";
      img.setAttribute("src", imgSrc);
      img.setAttribute("alt", "Flag of " + countries[j].Name);
      img.setAttribute("width", "200");
      img.setAttribute("height", "200");
      flagsDiv.appendChild(img);
    }

    
    flagImagesLink.parentNode.removeChild(flagImagesLink);
  });
};
