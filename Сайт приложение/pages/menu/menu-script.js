 // Используйте асинхронный запрос для загрузки содержимого меню
 var xhr = new XMLHttpRequest();
 xhr.onreadystatechange = function () {
     if (xhr.readyState == 4 && xhr.status == 200) {
         // Вставка полученного HTML в контейнер
         document.getElementById("menu-container").innerHTML = xhr.responseText;
     }
 };
 xhr.open("GET", "../menu/menu.html", true);
 xhr.send();
