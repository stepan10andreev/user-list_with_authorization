# Cписок пользователей с авторизацией/регистрацией через форму

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"  width='30'/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width='30'/>

## Описание

Cписок пользователей с авторизацией через форму с использвоанием API-сервиса [reqres.in](https://reqres.in/)

Все страницы приложения адаптивны под различные разрешения.

Регистрация и авторизация осуществляться через форму на главной странице.

### Форма регистрации:

Форма состоит из 4 __полей ввода__: `Имя`, `Электронная почта`, `Пароль` и `Потвердить пароль`.

Валидация полей:
1) все поля обязательны для заполнения
2) `Имя` - не больше 20 символов:
    - ошибка при невалидных данных появляется сразу при введение пользователем больше 20 символов (событие 'input') и исчезает также по событию 'input'
3) `Электронная почта` - валидация на соотвествие формату Email
    - ошибка при невалидном формате Email появляется при потери фокуса с инпута (событие 'blur) и исчезает при введении пользователем корректного формата               (событие 'input')
4) `Пароль` / `Потвердить пароль` - пароль должен содержать латиниские буквы, минимум 8 символов, хотя бы 1 спецсимвол (!@#$%^&*), хотя бы 1 цифру, и хотя бы 1 букву в верхнем и нижнем регистре
    - ошибка при невалидном пароле появляется при потери фокуса с инпута (событие 'blur) и исчезает при введении пользователем корреткного формата                     (событие 'input')
    - при нажатии на кнопку `Зарегистрироваться` и не совпадении значений пароля в полях `Пароль` и `Потвердить пароль` - также показывается ошибка, которая           исчезает при введении пользователем совпадающих значений (событие 'input')
    - можно менять видимость пароля 

При наличии незаполненых полей или некорректных данных регистрация по нажатию на кнопку `Зарегистрироваться` не происходит и показываются соотвествующие `сообщения ошибок`.

Так как регистрация реализована с использованием API-сервиса [reqres.in](https://reqres.in/) для входа(регистрации) и просмотра списка пользователей необходимо ввести один из Email, который предоставляет API-сервис. Например, `michael.lawson@reqres.in`, `byron.fields@reqres.in` или `eve.holt@reqres.in`.
Весь список Email на сайте сервиса [reqres.in](https://reqres.in/). Остальные поля ввода могут быть любыми и соотвествовать валидации.

### При успешной регистрации:

Просиходит переадресация на `страницу со списком пользователей`: карточки пользователей с аватаркой и именем пользвоателя

Получаемый при регистрации токен сохраняется в память браузера. Токен удаляется при нажатия на кнопку “выход” на `странице со списком пользователей` и осуществляется переадресация на `главную страницу` с формой регистрации.

Реализована пагинация cписка пользователей с кнопкой `Показать еще`. 

При нажатии на карточку пользователя открывается `страница детальной информацией о пользователе`

На карточке пользователя имеется кнопка для возможности поставить лайк пользователю. Лайки сохраняются после перезагрузки страницы.

Также реализованы приватные роутеры:
  - незарегистрированным пользовтаелям `страница со списком пользователей` и `страница детальной информацией о пользователе` недоступны: при отсутствии успешной регистрации и переходу по соотвестующим адресам страниц будет показана страница с сообщением `Cтраница доступна только зарегистрированным пользователям`







