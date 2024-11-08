README
Описание теста
Этот тест автоматизирует проверку формы обратной связи, расположенной на https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template с использованием Cypress. Тест проверяет корректность заполнения всех необходимых полей формы, выбор определенной опции из выпадающего списка и успешную отправку данных.

Функциональные возможности
Этот тестовый скрипт включает в себя следующие шаги:

Переход на страницу с формой
Тест сначала открывает URL формы. Поскольку изначальный URL, указанный в задании — https://www.testograf.ru/ru/blog/feedback-form-template — загружает форму через iframe, что создает технические ограничения при тестировании, тест переходит напрямую на URL https://kontaktnaya-forma.testograf.ru/, который открывает саму форму без использования iframe. Это позволяет избежать проблем с ограничением доступа к содержимому iframe.

Заполнение поля "Имя"
Тест заполняет первое поле формы, предназначенное для ввода имени, используя значение "Ваня".

Заполнение поля "Email"
Тест заполняет второе поле формы, предназначенное для ввода адреса электронной почты, используя тестовый email "fortests112@mail.ru".

Заполнение поля "Сообщение"
Тест заполняет третье поле формы, предназначенное для ввода номера телефона, вводя значение "+123", и заполняет текстовое поле для отправки сообщения с текстом "Привет! Это тестовое сообщение.".

Выбор опции из выпадающего списка
Тест кликает на элемент с классом, отвечающим за отображение списка опций. После открытия выпадающего списка тест выбирает опцию с текстом "Заказ".

Отправка формы
После заполнения всех полей и выбора нужной опции, тест находит и нажимает на кнопку с текстом "Отправить", отправляя заполненную форму.

Причина использования прямого URL формы
На оригинальной странице, указанной в задании (https://www.testograf.ru/ru/blog/feedback-form-template), форма обратной связи встроена в iframe. Использование iframe ограничивает возможности автоматизированного тестирования, так как Cypress не может напрямую получить доступ к содержимому iframe, если его источник загружается с другого домена. Это ограничение связано с политикой безопасности (CORS), которая предотвращает доступ к ресурсам другого домена из iframe.

Чтобы обойти это ограничение и протестировать функциональность формы напрямую, мы используем URL https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template, который открывает форму без использования iframe. Это позволяет проводить тестирование формы без ограничений доступа, обеспечивая более стабильное и надежное выполнение тестов.
