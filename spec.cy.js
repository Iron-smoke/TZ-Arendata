describe('Тестирование формы обратной связи', () => {
  beforeEach(() => {
    cy.visit('https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template');
  });

  it('Заполнение и отправка формы с корректными данными', () => {
    // Заполнение поля "Имя"
    cy.get('input.control___e16bbac759474cb49f55.transparent___ff454935e0e05f508992').eq(0).type('Ваня');

    // Заполнение поля "Email"
    cy.get('input.control___e16bbac759474cb49f55.transparent___ff454935e0e05f508992').eq(1).type('fortests112@mail.ru');

    // Заполнение поля "Сообщение"
    cy.get('input.control___e16bbac759474cb49f55.transparent___ff454935e0e05f508992').eq(2).type('+123');

    cy.get('textarea.multiline___cc6bb61529c652f37050.control___e16bbac759474cb49f55.transparent___ff454935e0e05f508992').type('Привет! Это тестовое сообщение.');


    cy.get('div.title___bb675eac964120e07a92.searchable___f1c57fdf9d3d7789a720').click();

    // Выбор опции "Другое"
    cy.get('div.option.item___a66a0ae47d8145dee2ff.small___d330116cc5b0a9fd3054').contains('Заказ').click();

    // Нажатие на кнопку отправки
    cy.contains('button', 'Отправить').click();

  });
});