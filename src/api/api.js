import axios from "axios";

const samuraiJS = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "3c4b5acc-33d2-47eb-b144-c3a8cf14957f",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});
const askCard = axios.create({
  withCredentials: true,

  baseURL: "http://ask-card.zapto.org:5100/api/v1/public/",
});

export const usersApi = {
  async getUsersApi(countOfUsersOnPage, currentPage) {
    const response = await samuraiJS.get(
      `users?count=${countOfUsersOnPage}&page=${currentPage}`
    );
    return response.data;
  },
  async unfollowApi(userId) {
    const response = await samuraiJS.delete(`follow/${userId}`);
    return response.data.resultCode;
  },
  async followApi(userId) {
    const response = await samuraiJS.post(`follow/${userId}`);
    return response.data.resultCode;
  },
};

export const authApi = {
  async isUserAuthorized() {
    const response = await samuraiJS.get("client/register/confirm");
    return response.data;
  },
  async userRegistarion(email, login, password, isConfirm = true) {
    const headers = {
      email,
      login,
      password,
      isConfirm,
    };
    const response = await askCard.post(`client/register/start`, "", {
      headers,
    });
    return response.data.resultCode;
  },
};

export const profileApi = {
  async getCurrentUserProfile(userId) {
    const response = await samuraiJS.get(`profile/${userId}`);
    return response.data;
  },
};

export const gameApi = {
  async getQustions(countOfQuestions, currentTest) {
    const response = await askCard.get(
      // `questions?count=${countOfQuestions}&test=${currentTest}`
      // `question/${currentTest}`
      `client/question/list/${countOfQuestions}`
    );
    return response.data;

    // const response = {
    //   data: {
    //     catalog: [
    //       {
    //         id: 1,
    //         question:
    //           "Супругой какого русского царя была Марфа Васильевна Собакина, пробывшая ею всего 15 дней",
    //         correctAnswer: "Иван Грозный",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       {
    //         id: 2,
    //         question: "Махабхарата – это…",
    //         correctAnswer: "древнеиндийский эпос",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       {
    //         id: 3,
    //         question: "Спутником какой планеты является Харон",
    //         correctAnswer: "Плутон",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       {
    //         id: 4,
    //         question: "Какая из птиц умеет летать задом наперед?",
    //         correctAnswer: "Колибри",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       {
    //         id: 5,
    //         question:
    //           "Какого животного боялся Уолт Дисней, который до 1947 года лично озвучивал Микки Мауса",
    //         correctAnswer: "Мышей",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       {
    //         id: 6,
    //         question:
    //           "Имя кого из героев киносаги «Звездные войны» произошло от русского слова",
    //         correctAnswer: "Чубакка",
    //         value: 1,
    //         thematic: "all",
    //       },
    //       // {
    //       //   id: 7,
    //       //   question:
    //       //     "Какое животное стало одни из главных героев романа братьев Вайнеров «Евангелие от палача»?",
    //       //   correctAnswer: "Мангуст",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 8,
    //       //   question:
    //       //     "Представителем какой политической партии являлся американский президент Джордж Вашингтон?",
    //       //   correctAnswer: "Никакой",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 9,
    //       //   question: "Спутником какой планеты является Харон",
    //       //   correctAnswer: "Плутон",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 10,
    //       //   question:
    //       //     "Как называется государство, которое расположено сразу в четырех полушариях Земли",
    //       //   correctAnswer: "Кирибати",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 11,
    //       //   question:
    //       //     "Какая из спортивных игр появилась в Шотландии в начале XVI века",
    //       //   correctAnswer: "Керлинг",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 12,
    //       //   question: "Какой океан ранее назывался Гиперборейским",
    //       //   correctAnswer: "Северный Ледовитый океан",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 13,
    //       //   question:
    //       //     "В качестве чего задумывали Использовать шпиль знаменитого Нью-Йорского небоскреба Эмпайр-стейт-билдинг его создатели",
    //       //   correctAnswer: "В качестве причального мачты для дирижаблей",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 14,
    //       //   question:
    //       //     "Над территорией бассейна какой реки пролетел знаменитый Тунгусский метеорит?",
    //       //   correctAnswer: "Енисея",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 15,
    //       //   question:
    //       //     "Что означает бинди – точка, которую индийские женщины рисуют в центре лба?",
    //       //   correctAnswer: "Что женщина замужем",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 16,
    //       //   question:
    //       //     "С цветовой гаммой на картинах какого художника сравнил Юрий Гагарин увиденные им цвета горизонта при своем первом полете в космос",
    //       //   correctAnswer: "Николай Рерих",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 17,
    //       //   question:
    //       //     "Для ухода за чем изначально предназначалось средство, получившее название помада",
    //       //   correctAnswer: "За волосами",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 18,
    //       //   question: "Много ли людей выживает после удара молнии?",
    //       //   correctAnswer: "Большинство",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 19,
    //       //   question: "Сколько ножек у бабочки?",
    //       //   correctAnswer: "Шесть",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 20,
    //       //   question: "Каким животным разрешен вход в мусульманскую мечеть",
    //       //   correctAnswer: "Кошкам",
    //       //   value: 1,
    //       //   thematic: "all",
    //       // },
    //       // {
    //       //   id: 21,
    //       //   question:
    //       //     "Как называется группа файлов, которая храниться отдельной группой и имеет собственное имя",
    //       //   correctAnswer: "Каталог",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 22,
    //       //   question:
    //       //     "Подкаталог SSS входит в каталог YYY. Как называется каталог YYY относительно каталога SSS",
    //       //   correctAnswer: "Родительский",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 23,
    //       //   question: "Что не является операционной системой",
    //       //   correctAnswer: "Norton Commander",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 24,
    //       //   question: "Что такое кластер на магнитном диске",
    //       //   correctAnswer: "Единица дискового пространства",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 25,
    //       //   question: "Что входит в логическое форматирование диска",
    //       //   correctAnswer: "Запись системных файлов",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 26,
    //       //   question: "Что входит в логическое форматирование диска?",
    //       //   correctAnswer: "Запись системных файлов",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //       // {
    //       //   id: 27,
    //       //   question:
    //       //     "Какая из программ предназначена для диагностики и коррекции диска",
    //       //   correctAnswer: "HDDscan",
    //       //   value: 1,
    //       //   thematic: "informatic",
    //       // },
    //     ],
    //   },
    // };
    // function shuffle(array) {
    //   let currentIndex = array.length,
    //     randomIndex;

    //   // While there remain elements to shuffle.
    //   while (currentIndex > 0) {
    //     // Pick a remaining element.
    //     randomIndex = Math.floor(Math.random() * currentIndex);
    //     currentIndex--;

    //     // And swap it with the current element.
    //     [array[currentIndex], array[randomIndex]] = [
    //       array[randomIndex],
    //       array[currentIndex],
    //     ];
    //   }

    //   return array;
    // }
    // shuffle(response.data.catalog);
    // return response.data;
  },
  async postResult(userId, result) {
    // const response = await askCard.post(`users/${userId}&result=${result}`);
    // return response.data.resultCode;
  },
};
