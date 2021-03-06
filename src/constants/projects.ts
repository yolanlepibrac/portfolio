/* eslint-disable sonarjs/no-duplicate-string */
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  homePage?: string;
  detailSource?: string;
  source?: string;
  sourceAndroid?: string;
  download: boolean;
  open: boolean;
  date: number;
  type: string;
  logo?: string;
  logoWhite?: string;
  techno?: string[];
}

export const PROJECTS = [
  {
    title: "Do you wanna bet",
    subtitle: "Mobile Application",
    description:
      "Application and website to store the bet you made with friends",
    homeImage: "./assets/images/projets/16_do-you-wanna-bet/home.png",
    detailImage: "./assets/images/projets/16_do-you-wanna-bet/detail.png",
    source: "http://yolan-pibrac.com/do-you-wanna-bet/",
    sourceAndroid:
      "https://play.google.com/store/apps/details?id=com.doyouwannabet&gl=FR",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/wanabet-1.jpg",
    logoWhite: "/images/wanabet-1-white.jpg",
    techno: ["ReactNative", "Node-Express", "MongoDb"],
  },
  {
    title: "Images Displayer",
    subtitle: "Website",
    description: "Engine to search and store your favourites movies",
    homeImage: "./assets/images/projets/17_images-displayer/home.png",
    detailImage: "./assets/images/projets/17_images-displayer/detail.png",
    source: "http://yolan-pibrac.com/images-displayer/",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["Mithril", "Node-Express", "MongoDb"],
  },
  {
    title: "Movie displayer",
    subtitle: "Website",
    description:
      "Display of images in a complex grid to store favourites pictures",
    homeImage: "./assets/images/projets/13_movie-displayer/home.png",
    detailImage: "./assets/images/projets/13_movie-displayer/detail.png",
    source: "http://yolan-pibrac.com/movies-displayer/",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["ReactJs", "Node-Express", "MongoDb"],
  },
  {
    title: "Image processing",
    subtitle: "Website",
    description:
      "Website where you can apply filters on your pictures, and download it.",
    homeImage: "./assets/images/projets/14_image-processing/home.png",
    detailImage: "./assets/images/projets/14_image-processing/detail.png",
    source: "http://yolan-pibrac.com/image-processing/",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["ReactJs", "Node-Express", "MongoDb"],
  },
  {
    title: "What will we eat",
    subtitle: "Website",
    description:
      "Random generation of places to eat, depending of the current day.",
    homeImage: "./assets/images/projets/15_what-will-we-eat/home.png",
    detailImage: "./assets/images/projets/15_what-will-we-eat/detail.png",
    source: "http://yolan-pibrac.com/what-will-we-eat/",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["ReactJs", "Node-Express", "MongoDb"],
  },
  {
    title: "ICOS Application",
    subtitle: "Website",
    description:
      "Interface de représentation d'une base de donnée de process BIM et extensions Tekla",
    homeImage: "./assets/images/projets/21_ICOS-applications/home.png",
    detailImage: "./assets/images/projets/21_ICOS-applications/detail.png",
    source: "",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["Mithril"],
  },
  {
    title: "Find the seal",
    subtitle: "Mobile Application",
    description: "Video Game for smartphone",
    homeImage: "./assets/images/projets/18_find-the-seal/home.png",
    detailImage: "./assets/images/projets/18_find-the-seal/detail.png",
    source: "",
    sourceAndroid:
      "https://play.google.com/store/apps/details?id=com.findtheseal",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/find-the-seal.jpg",
    logoWhite: "/images/find-the-seal-white.jpg",
    techno: ["ReactNative", "Node-Express", "MongoDb"],
  },
  {
    title: "Save the bear",
    subtitle: "Mobile Application",
    description: "Video Game for smartphone",
    homeImage: "./assets/images/projets/19_save-the-bear/home.png",
    detailImage: "./assets/images/projets/19_save-the-bear/detail.png",
    sourceAndroid:
      "https://play.google.com/store/apps/details?id=com.savethebear",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/save-the-bear.jpg",
    logoWhite: "/images/save-the-bear-white.jpg",
    techno: ["ReactNative", "Node-Express", "MongoDb"],
  },
  {
    title: "Drive the penguins",
    subtitle: "Mobile Application",
    description: "Video Game for smartphone",
    homeImage: "./assets/images/projets/20_drive-the-pinguins/home.png",
    detailImage: "./assets/images/projets/20_drive-the-pinguins/detail.png",
    sourceAndroid:
      "https://play.google.com/store/apps/details?id=com.drivethepinguins",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/drive-the-pinguins.jpg",
    logoWhite: "/images/drive-the-pinguins-white.jpg",
    techno: ["ReactNative", "Node-Express", "MongoDb"],
  },
  {
    title: "Kapla Simulator",
    subtitle: "Website",
    description: "Simulator de Kapla tri-dimansionnel",
    homeImage: "./assets/images/not-available-yet.png",
    detailImage: "",
    source: "",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: ["ReactJs", "ThreeJs", "ReactThreeFiber"],
  },
  {
    title: "10 puissance 4",
    subtitle: "Website",
    description:
      "Puissance 4 dans un espace vectoriel de dimension 10 (jeux smartphone)",
    homeImage: "./assets/images/not-available-yet.png",
    detailImage: "",
    source: "",
    download: false,
    open: false,
    date: 2019,
    type: "web",
    logo: "/images/sejongs-cup.png",
    logoWhite: "/images/sejongs-cup-white.png",
    techno: [
      "ReactJs",
      "ThreeJs",
      "ReactThreeFiber",
      "Node-Express",
      "MongoDb",
    ],
  },
];
