import FirstPage from "../Source/FirstPage.JPG";
import SecondPage from "../Source/SecondPage.JPG";
import SecondPage2 from "../Source/FirstPage2.JPG";
import Settings from "../Source/Settings.JPG";

const Help = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "41px", marginBottom: "31px", paddingTop: "20px" }}
    >
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Начальная страница
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div
              className="accordion-body"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                src={FirstPage}
                alt="Начальная страница"
                style={{ width: "50%" }}
              />
              <div className="container">
                <ol
                  class="list-group list-group-numbered"
                  style={{ fontSize: "18px" }}
                >
                  <li class="list-group-item">
                    Элемент меню "Новая модель", предназначен для открытия окна
                    создания новой информационно-логической модели, и расчёта
                    количественных показателей отказоустойчивости.
                  </li>
                  <li class="list-group-item">
                    Элемент меню "Загрузить модель", предназначен для загрузки
                    сохранённой модели.
                  </li>
                  <li class="list-group-item">
                    Элемент меню "Настройки", предназначен для открытия
                    интерфейса настроки элементов информационно-логической
                    модели.
                  </li>
                  <li class="list-group-item">
                    Элемент меню "Справка", предназначен для открытия страницы
                    справочной информации по эксплуатации программы.
                  </li>
                  <li class="list-group-item">
                    Элемент меню "Выход", предназначен для выхода из программы и
                    завершения всех процессов.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Страница создания модели
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <img
                  src={SecondPage}
                  alt="Страница создания модели"
                  style={{ width: "50%" }}
                />
                <div className="container">
                  <ol
                    class="list-group list-group-numbered"
                    style={{ fontSize: "18px" }}
                  >
                    <li class="list-group-item">
                      В левой части формы расположены инструменты создания
                      информационно-логической модели. Такие как
                      "Автоматизированное рабочее место", "Серверная группа" и
                      "Коммутатор", которые позволяют отобразить схему КСА в
                      полной мере.
                    </li>
                    <li class="list-group-item">
                      Ниже расположены две кнопки "Ввод данных" и
                      "Моделировать", первая предназначена для ввода исходных
                      данных необходимых для расчётов надёжностных
                      характеристик, вторая позволяет промоделировать работу КСА
                      и отобразить выходные данные по средствам графиков.
                    </li>
                    <li class="list-group-item">
                      Левее расположено поле, которое непосредственно
                      предназначено для создания информационно-логической
                      модели.
                    </li>
                    <li class="list-group-item">
                      Простым перетаскиванием элементов с левой части в правую,
                      позволит расположить элементы на поле, далее в
                      соответствии со схемой КСА можем соеденить эелементы между
                      собой.
                    </li>
                  </ol>
                </div>
              </div>
              <img src={SecondPage2} alt="Пример" style={{ width: "50%" }} />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Страница настроек
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div
              className="accordion-body"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <img
                src={Settings}
                alt="Начальная страница"
                style={{ width: "50%" }}
              />
              <div className="container">
                <ol
                  class="list-group list-group-numbered"
                  style={{ fontSize: "18px" }}
                >
                  <li class="list-group-item">
                    Кнопка-переключатель "Повышение производительности",
                    предназчена для включения оптимального режима расчётов, и
                    упрощения анимации программы. Она позволяет программе
                    корректно работать на слабых компьютерах.
                  </li>
                  <li class="list-group-item">
                    Элемент выбора цвета, предначен для выбора цвета
                    соеденительной линии элементов информационно-логической
                    модели.
                  </li>
                  <li class="list-group-item">
                    Кнопка-переключатель "Анимация линий", предназначена для
                    отключения анимации передвижения потов информации между
                    элементами информационно-логической модели.
                  </li>
                  <li class="list-group-item">
                    Ползунок выбора размера линии, предназначен для изменения
                    толщены соединительной линии элементов
                    информационно-логической модели.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
