import Img1 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135218.png'; 
import Img2 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135158.png'; 
import Img3 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135147.png'; 
import Img4 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135134.png'; 
import Img5 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135122.png'; 
import Img6 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135102.png'; 
import Img7 from '../Images/ProjectImages/DataSales/Screenshot 2024-06-07 135055.png'; 
import img8 from '../Images/ProjectImages/Smart Servilliance System/Screenshot 2024-06-07 142228.png'; 
import img9 from '../Images/ProjectImages/Smart Servilliance System/Friday, 02-17-04 PM 07 June 2024.jpg'; 
import img10 from '../Images/ProjectImages/Smart Servilliance System/Friday, 02-16-20 PM 07 June 2024.jpg'; 
import img11 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143640.png';
import img12 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143651.png';
import img13 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143736.png';
import img14 from '../Images/ProjectImages/ProjectManagementSystem/Screenshot 2024-06-07 143820.png';
import img15 from '../Images/ProjectImages/Smart Servilliance System/WhatsApp Image 2024-06-08 at 8.59.34 AM.jpeg'



const ProjectD = [
    {
        Name:'Big Mart Sales Analysis',
        Description:'This application helps in analysing the dataset genrated from big mart, visualise the data to them with the parameters like sales,cost of item, purchase of it and based on that it will provide insights about the performace of that item', 
        images: {
            img1:Img6, 
            img2:Img7, 
            img3:Img3, 
            img4:Img2, 
            img5:Img1
        }, 
        tech:[
            'HTML','CSS','Javascript','Django','Pandas','Matplotlib'
        ],
        url:'https://github.com/SairajRajput12/Big-mart-datasets-anakysis-website-using-django'
    },
    {
        Name:'Smart Survilliance System',
        Description:'Smart Surveillance System is an application that uses image processing algorithms for intrusion detection and machine learning algorithms (CNN for face recognition and ANN for action recognition) to identify intruders. Upon detection, it sends a message using the Twilio API and saves images as proof on the owner’s computer',
        images:{
            img1:img8, 
            img2:img9, 
            img3:img10, 
            img4:img15
        }, 
        tech:[
            'IP Webcam', 
            'Python', 
            'Twilio API', 
            'Jupyter Notebook', 
            'Keras'
        ], 
        url:'https://github.com/SairajRajput12/Machine-learning-project'
    },
    {   Name:'Project Management System',
        Description:'This application implements React, CSS, and the concept of simple data structures for efficient data management in JavaScript. The main objective of this application is to provide the user with the best possible project management tool.',
        images:{
            img1:img11, 
            img2:img12, 
            img3:img13, 
            img4:img14
        }, 
        tech:[
           'React',
           'CSS'
        ], 
        url:'https://github.com/SairajRajput12/Project-Management-Application'
    }
]

export default ProjectD; 