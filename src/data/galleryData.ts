export type GalleryImage ={
    id:number,
    src:string,
}
export type GallerySection ={
    title: string,
    description: string,
    images:GalleryImage[],
}
export const ClassRooms  = {
  title:"Classrooms",
  description:"Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
  images: [
    {
        id:1,
        src:"assets/img/class.png"
    },
    {
        id:2,
        src:"assets/img/class2.png"
    },
    {
        id:3,
        src:"assets/img/class3.png"
    },
    {
        id:4,
        src:"assets/img/class4.png"
    },
    {
        id:5,
        src:"assets/img/class4.png"
    },
    {
        id:6,
        src:"assets/img/class4.png"
    },
   
  ]
 } satisfies GallerySection

 export const Library = {
    title: "Library",
    description :"Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images :[
        {
            id:1,
            src:"/assets/img/library.png"
        },
        {
            id:2,
            src:"/assets/img/library1.png"
        },
        {
            id:3,
            src:"/assets/img/library2.png"
        },
        {
            id:4,
            src:"/assets/img/library3.png"
        },
        {
            id:5,
            src:"/assets/img/library.png"
        },
        {
            id:6,
            src:"/assets/img/library.png"
        }
    ]
 } satisfies GallerySection

 export const Sceince = {
       title:"Science Lab",
       description : "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
       images : [
        {
            id:1,
            src:"assets/img/science.png"
        },
        {
            id:2,
            src:"assets/img/sceince1.png"
        },
        {
            id:3,
            src:"assets/img/sceince2.png"
        },
        {
            id:4,
            src:"assets/img/sceince3.png"
        },
        {
            id:5,
            src:"assets/img/sceince3.png"
        },
        {
            id:6,
            src:"assets/img/sceince3.png"
        },
        {
            id:7,
            src:"assets/img/sceince3.png"
        },
       ]

    } satisfies GallerySection

export const Computers={
    
        title:"Computer Lab",
        description :"Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
        images :[
            {
                id:1,
                src:"assets/img/computer.png"
            },
            {
                id:2,
                src:"assets/img/computer1.png"
            },
            {
                id:3,
                src:"assets/img/computer2.png"
            },
            {
                id:4,
                src:"assets/img/computer3.png"
            },
            {
                id:5,
                src:"assets/img/computer3.png"
            },
            {
                id:6,
                src:"assets/img/computer3.png"
            }
        ]
    
} satisfies GallerySection

export const gardens ={
    title:"Garden and Nature Area",
    description :"Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images : [
        {
            id:1,
            src:"assets/img/garden.png"
        },
        {
            id:2,
            src:"assets/img/garden1.png"
        },
        {
            id:3,
            src:"assets/img/garden2.png"
        },
        {
            id:4,
            src:"assets/img/garden3.png"
        },
        {
            id:5,
            src:"assets/img/garden3.png"
        },
        {
            id:6,
            src:"assets/img/garden3.png"
        }

    ]
} satisfies GallerySection