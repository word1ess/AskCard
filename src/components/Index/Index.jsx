import "./Index.scss";
import Advantages from "./Advantages/Advantages";
import Info from "./Info/Info";
import Intro from "./Intro/Intro";

let state = {
  intro: {
    title:
      "Взгляните <br /> на тесты <span className='intro__new'>по-новому</span>",
    subtitle: `Совершенно новый соревновательный режим 
            в привычных всем нам тестах. Освежите свою память и 
            включите смекалку, создавайте свои собственные задания 
            и соревнуйтесь, кто же лучше!`,
    bgImage: "image/main/intro/intro-bg.webp",
    buttons: [
      {
        id: 1,
        text: "Попробовать",
        link: "/game",
        style: "btn-bg",
      },
      {
        id: 2,
        text: "Узнать больше",
        link: "#",
        style: "btn-bordered",
      },
    ],
  },
  advantages: {
    title: `Не только функционально, но и удобно`,
    advantage: [
      {
        id: 1,
        title: `Подключайтесь`,
        text: `Дождитесь приглашения и подключайтесь к увлекательному соревнованию`,
        bgImage: `image/main/advantages/advantages-icon-1.webp`,
        waveImg: `image/main/advantages/advatnages-wave-1.webp`,
      },
      {
        id: 2,
        title: `Соревнуйтесь`,
        text: `Каждая новая игра - это маленькое соревнование, а каждый неправильный ответ - это маленький проигрыш`,
        bgImage: `image/main/advantages/advantages-icon-2.webp`,
        waveImg: `image/main/advantages/advatnages-wave-2.webp`,
      },
      {
        id: 3,
        title: `Получайте баллы`,
        text: `За каждый правильный ответ Вы получаете балл и поднимаетесь в списке лидеров. Побеждает сильнейший!`,
        bgImage: `image/main/advantages/advantages-icon-3.webp`,
        waveImg: `image/main/advantages/advatnages-wave-3.webp`,
      },
    ],
  },
  info: {
    items: [
      {
        id: 1,
        title: "Выбирайте любые категории",
        text: "В сервисе собран десяток категорий на любой вкус: от информатики до медицицы, от тестов для школьников до тестов для студентов",
        image: "image/main/info/info-item-1.webp",
        order: true,
      },
      {
        id: 2,
        title: "Создавайте собственные тесты",
        text: "В сервис встроен удобный конструктор для создания Ваших собственных тестов на любую тему, которая нравится именно Вам",
        image: "image/main/info/info-item-2.webp",
      },
      {
        id: 3,
        title: "Следите за своей статистикой",
        text: "В окне “Статистика” Вы сможете легко узнать свои результаты и полученный опыт с течением времени, а также узнать, на каком месте Вы среди своих друзей",
        image: "image/main/info/info-item-3.webp",
        order: true,
      },
    ],
  },
};

const Index = (props) => {
  return (
    <div className="content">
      <Intro inner={state.intro}></Intro>
      <Advantages inner={state.advantages}></Advantages>
      <Info inner={state.info}></Info>
    </div>
  );
};

export default Index;
