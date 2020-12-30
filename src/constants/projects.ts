/* eslint-disable sonarjs/no-duplicate-string */
export interface Project {
  title: string;
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
}

export const PROJECTS = [
  {
    title: "Do you wanna bet",
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
  },
  {
    title: "Images Displayer",
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
  },
  {
    title: "Movie displayer",
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
  },
  {
    title: "Image processing",
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
  },
  {
    title: "What will we eat",
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
  },
  {
    title: "ICOS Application",
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
  },
  {
    title: "Find the seal",
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
  },
  {
    title: "Save the bear",
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
  },
  {
    title: "Drive the pinguins",
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
  },
  {
    title: "Kapla Simulator",
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
  },
  {
    title: "10 puissance 4",
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
  },
];
