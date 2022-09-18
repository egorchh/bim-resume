import educationOrganization from '../assets/images/Image4.png'
import hidrotecnicalCorpus from '../assets/images/ISPRAVIT_K_NOPRIZU.png'
import shoppingCentre from '../assets/images/Mnogofunktsionalny_torgovy_tsentr_5.png'
import exhibitionCenter from '../assets/images/Render_5.png'

// Фоточки гидрака

import gidrak1 from '../assets/projects/gidrak/1.jpg'
import gidrak2 from '../assets/projects/gidrak/2.jpg'
import gidrak3 from '../assets/projects/gidrak/3.jpg'
import gidrak4 from '../assets/projects/gidrak/4.jpg'
import gidrak5 from '../assets/projects/gidrak/5.jpg'
import gidrak6 from '../assets/projects/gidrak/6.jpg'
import gidrak7 from '../assets/projects/gidrak/7.jpg'
import gidrak8 from '../assets/projects/gidrak/8.jpg'

// Фоточки выстовочного центра

import exhibitionCenter1 from '../assets/projects/exhibitionCenter/1.jpg'
import exhibitionCenter2 from '../assets/projects/exhibitionCenter/2.jpg'
import exhibitionCenter3 from '../assets/projects/exhibitionCenter/3.jpg'
import exhibitionCenter4 from '../assets/projects/exhibitionCenter/4.jpg'

// Фоточки торгового центра

// Фоточки обзеобразовательной организации


const data = [
      {id: 1, img: shoppingCentre, title: 'Многофункциональный торговый комплекс', descr: 'Концептуальный проект'},
      {id: 2, img: hidrotecnicalCorpus, title: 'Гидротехнический корпус Санкт-Петербургского университета Петра Великого', descr: 'Проект реставрации', projects: [
        gidrak1,
        gidrak2,
        gidrak3,
        gidrak4,
        gidrak5,
        gidrak6,
        gidrak7,
        gidrak8
      ]},
      {id: 3, img: exhibitionCenter, title: 'Выставочный центр г. Пермь', descr: 'Концептуальный проект', projects: [
        exhibitionCenter1,
        exhibitionCenter2,
        exhibitionCenter3,
        exhibitionCenter4,
      ]},
      {id: 4, img: educationOrganization, title: 'Общеобразовательная организация', descr: 'Концептуальный проект'},
    ];

export default data;