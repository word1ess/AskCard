import { gameApi } from "../api/api";

const GET_GAME_DATA = "GET_GAME_DATA";
const CHECK_USER_ANSWER = "CHECK_USER_ANSWER";
const HIDDEN_RESULT = "HIDDEN_RESULT";
const END_OF_TEST = "END_OF_TEST";
const RENDER_QUESTION = "RENDER_QUESTION";

export const getGameDataAccepted = (gameData) => ({
  type: GET_GAME_DATA,
  body: gameData,
});

export const checkingUserAnswer = (isCorrect, correctAnswer) => ({
  type: CHECK_USER_ANSWER,
  body: { isCorrect, correctAnswer },
});

export const hiddenResult = () => ({
  type: HIDDEN_RESULT,
});

export const endingOfTest = (currIndexOfQuestion) => ({
  type: END_OF_TEST,
  body: currIndexOfQuestion,
});

export const startRenderQuestion = () => ({
  type: RENDER_QUESTION,
});

let initalState = {
  userStats: {
    userScore: 0,
    indexOfAnswer: 0,
    classForResult: "",
    showAnswer: "",
    showResult: "",
    isShowResult: false,
  },
  catalog: [
    {
      id: 1,
      question:
        "Супругой какого русского царя была Марфа Васильевна Собакина, пробывшая ею всего 15 дней",
      correctAnswer: "Иван Грозный",
      value: 1,
      thematic: "all",
    },
    {
      id: 2,
      question: "Махабхарата – это…",
      correctAnswer: "древнеиндийский эпос",
      value: 1,
      thematic: "all",
    },
    {
      id: 3,
      question: "Спутником какой планеты является Харон",
      correctAnswer: "Плутон",
      value: 1,
      thematic: "all",
    },
    {
      id: 4,
      question: "Какая из птиц умеет летать задом наперед?",
      correctAnswer: "Колибри",
      value: 1,
      thematic: "all",
    },
    {
      id: 5,
      question:
        "Какого животного боялся Уолт Дисней, который до 1947 года лично озвучивал Микки Мауса",
      correctAnswer: "Мышей",
      value: 1,
      thematic: "all",
    },
    {
      id: 6,
      question:
        "Имя кого из героев киносаги «Звездные войны» произошло от русского слова",
      correctAnswer: "Чубакка",
      value: 1,
      thematic: "all",
    },
    {
      id: 7,
      question:
        "Какое животное стало одни из главных героев романа братьев Вайнеров «Евангелие от палача»?",
      correctAnswer: "Мангуст",
      value: 1,
      thematic: "all",
    },
    {
      id: 8,
      question:
        "Представителем какой политической партии являлся американский президент Джордж Вашингтон?",
      correctAnswer: "Никакой",
      value: 1,
      thematic: "all",
    },
    {
      id: 9,
      question: "Спутником какой планеты является Харон",
      correctAnswer: "Плутон",
      value: 1,
      thematic: "all",
    },
    {
      id: 10,
      question:
        "Как называется государство, которое расположено сразу в четырех полушариях Земли",
      correctAnswer: "Кирибати",
      value: 1,
      thematic: "all",
    },
    {
      id: 11,
      question:
        "Какая из спортивных игр появилась в Шотландии в начале XVI века",
      correctAnswer: "Керлинг",
      value: 1,
      thematic: "all",
    },
    {
      id: 12,
      question: "Какой океан ранее назывался Гиперборейским",
      correctAnswer: "Северный Ледовитый океан",
      value: 1,
      thematic: "all",
    },
    {
      id: 13,
      question:
        "В качестве чего задумывали Использовать шпиль знаменитого Нью-Йорского небоскреба Эмпайр-стейт-билдинг его создатели",
      correctAnswer: "В качестве причального мачты для дирижаблей",
      value: 1,
      thematic: "all",
    },
    {
      id: 14,
      question:
        "Над территорией бассейна какой реки пролетел знаменитый Тунгусский метеорит?",
      correctAnswer: "Енисея",
      value: 1,
      thematic: "all",
    },
    {
      id: 15,
      question:
        "Что означает бинди – точка, которую индийские женщины рисуют в центре лба?",
      correctAnswer: "Что женщина замужем",
      value: 1,
      thematic: "all",
    },
    {
      id: 16,
      question:
        "С цветовой гаммой на картинах какого художника сравнил Юрий Гагарин увиденные им цвета горизонта при своем первом полете в космос",
      correctAnswer: "Николай Рерих",
      value: 1,
      thematic: "all",
    },
    {
      id: 17,
      question:
        "Для ухода за чем изначально предназначалось средство, получившее название помада",
      correctAnswer: "За волосами",
      value: 1,
      thematic: "all",
    },
    {
      id: 18,
      question: "Много ли людей выживает после удара молнии?",
      correctAnswer: "Большинство",
      value: 1,
      thematic: "all",
    },
    {
      id: 19,
      question: "Сколько ножек у бабочки?",
      correctAnswer: "Шесть",
      value: 1,
      thematic: "all",
    },
    {
      id: 20,
      question: "Каким животным разрешен вход в мусульманскую мечеть",
      correctAnswer: "Кошкам",
      value: 1,
      thematic: "all",
    },
    {
      id: 21,
      question:
        "Как называется группа файлов, которая храниться отдельной группой и имеет собственное имя",
      correctAnswer: "Каталог",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 22,
      question:
        "Подкаталог SSS входит в каталог YYY. Как называется каталог YYY относительно каталога SSS",
      correctAnswer: "Родительский",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 23,
      question: "Что не является операционной системой",
      correctAnswer: "Norton Commander",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 24,
      question: "Что такое кластер на магнитном диске",
      correctAnswer: "Единица дискового пространства",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 25,
      question: "Что входит в логическое форматирование диска",
      correctAnswer: "Запись системных файлов",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 26,
      question: "Что входит в логическое форматирование диска?",
      correctAnswer: "Запись системных файлов",
      value: 1,
      thematic: "informatic",
    },
    {
      id: 27,
      question:
        "Какая из программ предназначена для диагностики и коррекции диска",
      correctAnswer: "HDDscan",
      value: 1,
      thematic: "informatic",
    },
  ],
};

const gameReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_GAME_DATA:
      return { ...state, catalog: [...action.body] };
    case CHECK_USER_ANSWER:
      let newStat = {
        showAnswer: action.body.correctAnswer,
      };
      if (action.body.isCorrect) {
        newStat.userScore = state.userStats.userScore + 1;
        newStat.classForResult = `correct`;
      } else {
        newStat.userScore = state.userStats.userScore;
        newStat.classForResult = `wrong`;
      }
      return { ...state, userStats: { ...state.userStats, ...newStat } };
    case HIDDEN_RESULT:
      return {
        ...state,
        userStats: { ...state.userStats, classForResult: "", showAnswer: "" },
      };
    case END_OF_TEST:
      return {
        ...state,
        userStats: {
          ...state.userStats,
          showResult: `Вы закончили прохожднеие теста с результатом в ${state.userStats.userScore} из ${state.catalog.length}`,
          isShowResult: true,
        },
      };
    case RENDER_QUESTION:
      return {
        ...state,
        userStats: {
          ...state.userStats,
          indexOfAnswer: ++state.userStats.indexOfAnswer,
        },
      };

    default:
      return state;
  }
};

export const getGameData = (countOfQuestions, currentTest) => {
  return (dispatch) => {
    gameApi.getQustions(countOfQuestions, currentTest).then((response) => {
      dispatch(getGameDataAccepted(response.catalog));
    });
  };
};

export const checkUserAnswer = (userAnswer, correctAnswer) => {
  return (dispatch) => {
    dispatch(checkingUserAnswer(userAnswer === correctAnswer, correctAnswer));
    setTimeout(() => {
      dispatch(hiddenResult());
    }, 2000);
  };
};

export const renderNextQuestion = () => {
  return (dispatch) => {
    dispatch(startRenderQuestion());
  };
};

export const endOfTest = (currIndexOfQuestion) => {
  return (dispatch) => {
    dispatch(endingOfTest(currIndexOfQuestion));
  };
};
export default gameReducer;
