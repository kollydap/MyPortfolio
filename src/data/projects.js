import limupa from '../assets/limupa.PNG'
import flexbook from '../assets/flexbook.PNG'
import kolastore from '../assets/kolastore.PNG'
import bluecure from '../assets/bluecare.PNG'
import intervid from '../assets/intervid.PNG'

export const PROJECTS =[
    {   
        id: 1,
        title: "Doctor Appointment webapp",
        description: "A doctor appointment webapp built on django rest framework, django channels for real time chat and ReactJs for front end",
        link:'https://bluecare.netlify.app/',
        github:"https://github.com/kollydap/blue",
        image: bluecure
    },
        {
        id:3,
        title:"Social App",
        description:"textie is a social web-application built on django rest framework that allows users post and share contents, coment, reply comments, send friend requests, and even chat ",
        link:"https://kollybox.netlify.app/",
        github:"https://github.com/kollydap/textie",
        image:flexbook
    },
    
    {   
        id: 4,
        title: "E-commerce webapp",
        description: "Ecommerce webapp built on django web framework and html ",
        link:'http://stemstore.herokuapp.com/',
        github:"https://github.com/kollydap/stemstore",
        image: limupa
    },

    {
        id:2,
        title:"Online interview webapp",
        description: "Intervid is your software platform for Intervieing management. Interview process made easier allowing you to automatically validate, collect and distribute questions, so you can keep records of every interview process.  ",
        link:"https://intervid.netlify.app/",
        github:"https://github.com/kollydap/intervid",
        image:intervid
    },
    {
        id:5,
        title:"React Ecommerce webapp",
        description:"This is my first react project lol.Ecommerce webapp built with just react, i was just testing react for the first time",
        link:"http://kolastore.netlify.app/",
        github:"http://github.com/kollydap/kolastore",
        image: kolastore
    },
    
    {   
        id: 6,
        title: "Facebook Clone",
        description: "Facebook clone built with Reactjs and Firebase for User Authentication",
        link:"http://flexbook-fd98b.web.app/",
        github:"http://github.com/kollydap/facebookclone",
        image: flexbook
    }
]