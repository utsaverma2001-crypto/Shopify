import bcrypt from 'bcryptjs';
const data={
    users:[
          {
               name:'Utsav',
               email:'admin@example.com',
               password:bcrypt.hashSync('1234',8),
               isAdmin:true
          },
          {
            name:'User',
            email:'user@example.com',
            password:bcrypt.hashSync('1234',8),
            isAdmin:false
          }
    ],
    products:[
        {
           
            name:'Nike Slim Shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:120,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality product'
        },
        {
          
            name:'Adidas Slim Shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:110,
            countInStock:20,
            brand:'Adidas',
            rating:4.0,
            numReviews:15,
            description:'high quality product'
        },
        {
           
            name:'Puma Slim Shirt',
            category:'Shirts',
            image:'/images/p3.jpg',
            price:130,
            countInStock:15,
            brand:'Puma',
            rating:4.7,
            numReviews:16,
            description:'high quality product'
        },
        {
           
            name:'Gucci Pants',
            category:'Pants',
            image:'/images/p4.jpg',
            price:150,
            countInStock:19,
            brand:'Gucci',
            rating:5.0,
            numReviews:40,
            description:'high quality product'
        },
        {
           
            name:'Reebok Pants',
            category:'Pants',
            image:'/images/p5.jpg',
            price:100,
            countInStock:25,
            brand:'Reebok',
            rating:4.2,
            numReviews:20,
            description:'high quality product'
        },
        {
           
            name:'Lee Pants',
            category:'Pants',
            image:'/images/p6.jpg',
            price:120,
            countInStock:0,
            brand:'Lee',
            rating:4.2,
            numReviews:10,
            description:'high quality product'
        }
    ]
};
export default data;