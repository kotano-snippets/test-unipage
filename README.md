# unipage-test

   <h1 class="main-headline">Code Review Results</h1>
  <section class="file-section">
    <h2 class="file-section-headline">\badcode.js</h2>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L2-L3">Position: 2:0-3:15</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Объявление переменных в теле класса</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Нельзя объявлять переменные в теле класса
*Публичные поля объявляются без ключевого слова var/const/let</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L11-L11">Position: 11:16-11:16</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Попытка доступа к значению через имя класса</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>У класса нет значения username. Нужно использовать this, чтобы обратиться к значению экземпляра.

Да и вообще бесполезная функция</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L15-L15">Position: 15:4-15:47</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-2">2</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Лучше выбрасывать исключение с объектом Error</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error Handling</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Лучше делать так: throw new Error(&#x27;msg&#x27;)</p>
        </td>
      </tr>
      <tr class="row-additional">
        <td class="caption">Additional Info</td>
        <td class="text">https://eslint.org/docs/rules/no-throw-literal</td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L18-L18">Position: 18:9-18:26</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-2">2</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Имя метода написано через snake_case</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Code-Style</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>В JavaScript принято использовать camelCase</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L19-L19">Position: 19:4-19:35</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-1">1</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">XMLHttpRequest использует устаревшее API</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Maintainability</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Лучше использовать Fetch</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L20-L21">Position: 20:4-21:74</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Передача пользовательских данных через метод GET</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Reliability</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Метод GET используется в основном для полчуения данных, а еще он раскрывает пользовательские данные, так как передает их в заголовке запроса. Таким образом нужно использовать POST для авторизации</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L20-L20">Position: 20:4-20:12|26:4-26:14</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Запрос не отправляется</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Чтобы отправить запрос нужно воспользоваться методом xhr.send()</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L30-L30">Position: 24:4-24:24|28:8-28:29|30:8-30:21</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Неправильное использование переменной + попытка изменить константу ++</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Architecture</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Значение константы нельзя изменить. Такой код выдаст ошибку.
И в целом переменная result не имеет никакого смысла. Она всегда возвращает false, так как xhr.onload работает асинхронно.
Также манипуляции с result не выглядят логичными. То, что она может иметь два типа данных (response и bool), считается плохой практикой.
Лучше иметь некий массив, который будет хранить в себе ошибки. Если массив пустой, то все ОК.
В любом случае код неиспользуемый. Лучше использовать Fetch, и получать результат его работы в асинхронной функции, а там уже обрабатывать.</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L27-L27">Position: 27:10-27:30</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Сравнение числового значения со строкой</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>xhr.status возвращает число. При строгом сравнении условие никогда не будет выполняться.</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L38-L38">Position: 38:0-38:31</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-2">2</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Неправильная обработка события</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Complexity</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Лучше прикрепить обработчик события submit ко всей форме.</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L38-L38">Position: 38:0-38:36</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-1">1</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Использование сторонней библиотеки jQuery</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Maintainability</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Само по себе использование jQuery не является чем-то плохим. Но все же лучше использовать возможности современного JavaScript*. Этого же эффекта возможно добиться без jQuery.
* При условии, что не нужно заботиться о кроссбраузерности.</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L39-L40">Position: 39:2-40:32</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-1">1</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Ручное вытаскивание данных из полей</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Performance</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Лучше использовать ссылку на форму и извлекать из нее значения полей. Еще можно исползовать FormData(formElement).</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L40-L40">Position: 39:2-39:5|40:2-40:5</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-2">2</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Объявление через var</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Maintainability</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Лучше не использовать var, особенно там, где его применение не несет дополнительной пользы.
Лучше использовать const, так как нет взаимодействия со внешним scope и нет переопределения.
</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L42-L42">Position: 42:2-42:64</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Нет ключевого слова new + результат всегда false</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Error</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Ключевое слово new необходимо, чтобы создать пустой объект для экземпляра класса. Результат всегда false</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
    <h3 class="lines-headline">
      <a href="https://github.com/kotano-snippets/test-unipage/blob/759239b3ca4c4cc68860047ffd9076508d784fba/badcode.js#L44-L44">Position: 44:6-44:17</a>
    </h3>
    <table class="review-table">
      <tr class="row-priority">
        <td class="caption">Priority</td>
        <td class="text">
          <span class="prio-3">3</span>
        </td>
      </tr>
      <tr class="row-title">
        <td class="caption">Title</td>
        <td class="text">Используется нестрогое равенство</td>
      </tr>
      <tr class="row-category">
        <td class="caption">Category</td>
        <td class="text">Reliability</td>
      </tr>
      <tr class="row-description">
        <td class="caption">Description</td>
        <td class="text">
          <p>Любое правдивое значение res приведет ко входу в цикл. Лучше использовать более явное условие.</p>
        </td>
      </tr>
      <tr class="row-sha">
        <td class="caption">SHA</td>
        <td class="text">759239b3ca4c4cc68860047ffd9076508d784fba</td>
      </tr>
    </table>
  </section>
