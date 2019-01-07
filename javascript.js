
var infoChildren = document.getElementById('infoList').children;
for (var i = 0; i < infoChildren.length; i++) {
  infoChildren[i].style.display = "none";
}
document.getElementById('about_me').style.display = "block";



function changeCategory(info, category) {
  var categoryChildren = document.getElementById('categoryList').children;
  for (var i = 0; i < categoryChildren.length; i++) {
    categoryChildren[i].removeAttribute("id");
  }

  var infoChildren = document.getElementById('infoList').children;
  for (var i = 0; i < infoChildren.length; i++) {
    infoChildren[i].style.display = "none";
  }


  var currentInfo = document.getElementById(info);
  currentInfo.style.display = "block";

  category.setAttribute("id", "active");
}
