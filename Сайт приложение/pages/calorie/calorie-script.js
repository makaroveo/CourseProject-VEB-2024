function addFood() {
    var addButton = document.getElementById("add-button");
    var mealData = document.getElementById("meal-data");
    var errorMessage = document.getElementById("error-message");

    if (addButton.textContent === "Открыть меню добавления") {
        addButton.textContent = "Скрыть меню добавления";

        // Создаем элементы для ввода данных блюда
        var foodNameInput = document.createElement("input");
        foodNameInput.type = "text";
        foodNameInput.placeholder = "Название блюда";

        var caloriesInput = document.createElement("input");
        caloriesInput.type = "number";
        caloriesInput.placeholder = "Количество калорий";

        var proteinInput = document.createElement("input");
        proteinInput.type = "number";
        proteinInput.placeholder = "Количество белка";

        var fatInput = document.createElement("input");
        fatInput.type = "number";
        fatInput.placeholder = "Количество жира";

        var carbsInput = document.createElement("input");
        carbsInput.type = "number";
        carbsInput.placeholder = "Количество углеводов";

        // Создаем кнопку для добавления блюда
        var addButtonInner = document.createElement("button");
        addButtonInner.textContent = "+";
        addButtonInner.onclick = function () {
            // Проверяем, заполнены ли все поля
            if (
                foodNameInput.value === "" ||
                caloriesInput.value === "" ||
                proteinInput.value === "" ||
                fatInput.value === "" ||
                carbsInput.value === ""
            ) {
                errorMessage.textContent = "Пожалуйста, заполните все поля";
                return;
            }

            // Убираем сообщение об ошибке, если оно было отображено
            errorMessage.textContent = "";

            // Добавляем элемент с информацией о блюде в список
            var mealList = document.getElementById("meal-list");
            var listItem = document.createElement("li");
            listItem.className = "meal-item";
            listItem.innerHTML = `
                <span>${foodNameInput.value}</span>
                <span>${caloriesInput.value} ккал</span>
                <span>${proteinInput.value} б</span>
                <span>${fatInput.value} ж</span>
                <span>${carbsInput.value} у</span>
            `;
            mealList.appendChild(listItem);

            // Очищаем поля ввода
            foodNameInput.value = "";
            caloriesInput.value = "";
            proteinInput.value = "";
            fatInput.value = "";
            carbsInput.value = "";
        };

        // Добавляем созданные элементы на страницу
        mealData.innerHTML = "";
        mealData.appendChild(foodNameInput);
        mealData.appendChild(caloriesInput);
        mealData.appendChild(proteinInput);
        mealData.appendChild(fatInput);
        mealData.appendChild(carbsInput);
        mealData.appendChild(addButtonInner);
    } else {
        addButton.textContent = "Открыть меню добавления";
        mealData.innerHTML = "";
        // Убираем сообщение об ошибке при скрытии меню
        errorMessage.textContent = "";
    }
}




function calculateTotal() {
    var mealList = document.getElementById("meal-list");
    var items = mealList.getElementsByClassName("meal-item");
    var mealName = document.getElementById("meal-name").value;
    var errorMessage = document.getElementById("error-message");

    // Проверяем, заполнено ли поле с названием приема пищи
    if (!mealName.trim()) {
        errorMessage.textContent = "Пожалуйста, введите название приема пищи перед сохранением результатов";
        return;
    }

    var totalCalories = 0;
    var totalProtein = 0;
    var totalFat = 0;
    var totalCarbs = 0;

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemCalories = parseFloat(item.children[1].innerText);
        var itemProtein = parseFloat(item.children[2].innerText);
        var itemFat = parseFloat(item.children[3].innerText);
        var itemCarbs = parseFloat(item.children[4].innerText);

        totalCalories += itemCalories;
        totalProtein += itemProtein;
        totalFat += itemFat;
        totalCarbs += itemCarbs;
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Итоги для "${mealName}":</h2>
        <p>Общее количество калорий: ${totalCalories.toFixed(2)} ккал</p>
        <p>Общее количество белка: ${totalProtein.toFixed(2)} бжу</p>
        <p>Общее количество жира: ${totalFat.toFixed(2)} ж</p>
        <p>Общее количество углеводов: ${totalCarbs.toFixed(2)} уг</p>
    `;

    // Очищаем сообщение об ошибке перед следующей проверкой
    errorMessage.textContent = "";
}
