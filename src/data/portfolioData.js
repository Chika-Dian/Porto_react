
import KlinikHewanImage from '../assets/website/klinikhewan.png';
import greengrow from '../assets/ui/greengrow.png';
import Rafayel from '../assets/3d/1.png';
import Edusync from '../assets/ui/mobile.png';
import CiaKopi from '../assets/ui/ciakopi.png';
import Makanan from '../assets/3d/2.png';
import Makanan1 from '../assets/3d/4.png';
import Porto1 from '../assets/website/portofolio.png';
import Kelici from '../assets/3d/5.png';
import Kelici1 from '../assets/3d/6.png';
import Sincan from '../assets/3d/sinchan.png';
import Sincan1 from '../assets/3d/Sincan.png';
import Grafis1 from '../assets/grafis/1.png';
import Grafis2 from '../assets/grafis/2.png';
import Grafis3 from '../assets/grafis/3.png';
import Grafis4 from '../assets/grafis/4.png';
export const categories = ['Website', 'UI/UX', '3D', 'Graphics'];




export const portfolioDataByCategory = {
  Website: [
    { 
      id: 101, 
      title: "Website Klinik Hewan", 
      tags: "Website untuk klinik hewan, menampilkan layanan, dokter, dan informasi kontak.", 
      image: KlinikHewanImage, 
      label: "Website",
      detailUrl: "https://chika-dian.github.io/Website-Klinik-Hewan/"
    },

    { 
      id: 102, 
      title: "Website Portofolio", 
      tags: "Website untuk portoflio.", 
      image: Porto1, 
      label: "Website",
      detailUrl: "https://chika-dian.github.io/Portofolio/"
    },

    // Batas Web 
  ], 
  'UI/UX': [
   { 
      id: 201, 
      title: "Green Grow", 
      tags: " Situs web ini berfungsi sebagai landing page dan pusat informasi yang menampilkan nilai, fitur, dan step-by-step penggunaan Kalkulator Pintar dan Pratinjau 3D/AR untuk membantu petani Indonesia mencapai perencanaan tanam yang presisi dan efisien, sejalan dengan adopsi praktik pertanian berkelanjutan.", 
      image: greengrow, 
      label: "Desain Web UI/UX",
      detailUrl: "https://www.figma.com/proto/b2CWf1T3JsY853U0fdRMUr/Chika-Dian-Nurcahyani_Green-Grow?node-id=58-14&p=f&t=lH8zvFPJhyXPBSpU-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=58%3A14&show-proto-sidebar=1"
    },
    { 
      id: 202, 
      title: "Aplikasi edusync ", 
      tags: " Aplikasi pembelajaran online, yang terdiri dari fitur: todolist, kursus online, timer.", 
      image: Edusync, 
      label: "Aplikasi UI/UX",
      detailUrl: "https://www.figma.com/proto/87cdC9gufMTyOYdqVOTpa4/Untitled?t=MQNR26bpuvPBbhXe-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=7-280"
    },

    { 
      id: 203, 
      title: " Desain Ciakopi ", 
      tags: " Website pembelajaan kopi.", 
      image: CiaKopi, 
      label: "Website UI/UX",
      detailUrl: "https://www.figma.com/design/5llY5WDDlPVPe56zIOZ1xa/Untitled?t=yXVXw9r9DALKbBDb-1"
    },

    // batas UI/UX
  ],
  '3D': [
    {
       id: 301,
    title: " 3D Chibi ",
    tags: "3D ",
    spline: "https://prod.spline.design/oPJAH-hKlXKk5tXh/scene.splinecode",
    label: "3D Design",
    detailUrl: "#",
    images: [
    Rafayel, 
    { type: "spline", url: "https://prod.spline.design/oPJAH-hKlXKk5tXh/scene.splinecode" }
    ]

    },

    {
       id: 302,
    title: " 3D Chibi Makanan ",
    tags: "3D ",
    label: "3D Design",
    detailUrl: "#",
    images: [
    Makanan, 
    Makanan1,
    ]
    },

    {
       id: 303,
    title: " 3D Karakter ",
    tags: "3D ",
    label: "3D Design",
    detailUrl: "#",
    images: [
    Kelici, 
    Kelici1,
    ]
    },

     {
       id: 304,
    title: " 3D ",
    tags: "3D ",
    label: "3D Design",
    detailUrl: "#",
    images: [
    Sincan, 
    Sincan1,
    ]
    },

    // Batas 3d 
  ],
  Graphics: [
    { 
      
      id: 401,
      title: " Desain grafis",
      tags: "Desain Grafis",
      label: "Branding",
      detailUrl: "#",

      stackImages: [
        Grafis1,
        Grafis2,
        Grafis3,
        Grafis4
      ]
    },
  ],
};