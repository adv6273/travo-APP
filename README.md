**travo-APP**  
Welcome to travo-APP, the ultimate platform for all your accommodation needs. Whether you are looking to add your place,
book a new one, or manage your existing bookings, our website provides a seamless and user-friendly experience designed with you in mind.

Table of Contents  
* Features  
* Installation  
* Usage  
* Screenshots  
    
**Features :**  
**Home:**  **Welcome to Home page of travo-APP**  

![home](https://github.com/adv6273/travo-APP/assets/90032570/d4f6e9e7-0bab-426a-8c7c-6df5debd4289)
![homewithfooter](https://github.com/adv6273/travo-APP/assets/90032570/231fa033-2660-497e-8106-c638c97ece3c)

**Register:**  

![register](https://github.com/adv6273/travo-APP/assets/90032570/338508a0-a50d-4cc2-aebb-ebaa364c9158)

**login:** 

![login](https://github.com/adv6273/travo-APP/assets/90032570/723d1f7d-82c3-4f26-b04a-cdef8cc45b63)



**Add Your Place:** Share your beautiful place with others. Easily add your property details, including photos, descriptions, and availability, to attract potential guests.  

![addnewplace](https://github.com/adv6273/travo-APP/assets/90032570/d6eeade9-a1a1-4778-b53a-a1d39508a9b1)
![addnewplace2](https://github.com/adv6273/travo-APP/assets/90032570/372725a7-4544-4d67-a8d1-8fedb30c3931)

**Modify Your Place:** Manage your listings effortlessly. If you decide to remove/change your place from our platform, you can do so with just a few clicks.  

![editplace](https://github.com/adv6273/travo-APP/assets/90032570/7c321bf2-acc6-4093-b8ff-0acad0618e14)


![editplace1](https://github.com/adv6273/travo-APP/assets/90032570/87a7d05a-813b-4b83-bf96-39ef3f4da3a0)

![editplace2](https://github.com/adv6273/travo-APP/assets/90032570/ca0e086f-e297-4558-8642-e0ee03c4c0be)

**Book Any Place:** Explore a variety of places listed on our website. Find the perfect accommodation that suits your needs and book it instantly.  

![bookplace](https://github.com/adv6273/travo-APP/assets/90032570/b27815eb-0657-488b-ab07-bf4b0ac416f6)


**Modify Bookings:** Plans change, and we understand that. You can easily cancel a reservation.

![singlemybookingextended](https://github.com/adv6273/travo-APP/assets/90032570/38fc3a6a-023e-4028-9c41-4d6dff6dc7f3)


**Manage Booking Requests:** If you have listed a place and received booking requests, you have full control over accepting or deleting those requests.  

![bookingrequests](https://github.com/adv6273/travo-APP/assets/90032570/45a473d7-5511-49c4-9421-8cb19621becd)

**Beautiful Design:** Our website features a modern and aesthetically pleasing design. It’s not just about functionality but also about enjoying the process of finding and booking your next stay.  

**Secure Authentication:** Security is our top priority. We ensure that each user’s email and phone number are unique and securely authenticated to provide a safe experience.

![profile](https://github.com/adv6273/travo-APP/assets/90032570/f060d483-07c6-49e5-8624-419e7d0ad821)


**Simple and Easy to Use:** We believe in simplicity. Our platform is designed to be intuitive and straightforward, making it easy for everyone to use.  

**Photo Gallery:** To keep the place pages simple and uncluttered, we display only 3 photos initially. You can view all photos in a dedicated gallery component.

![expandimage](https://github.com/adv6273/travo-APP/assets/90032570/6158ae42-0ce0-4938-a473-a4e169b420bf)

**Contace Us:** Connect with us easily by sending messages through our website in **Contact** sub section or on our social media pages.  

 ![contactme](https://github.com/adv6273/travo-APP/assets/90032570/85903988-f5b9-4dae-a432-a341742288ef)

**Installation**  
  Prerequisites  
 * Node.js (version 14.x or later)  
 * npm (version 6.x or later)  
**Steps**
    * Clone the Repository   
      * git clone https://github.com/yourusername/travo-app.git
      * cd travo-app
        
    * Install Backend Dependencies
       * cd backend
       * npm install
         
    **Set Up Environment Variables**
    
    Create a .env file in the backend directory with the following content:
    
    **env**
      MONGO_URI=your_mongodb_uri  
      JWT_SECRET=your_jwt_secret  
      EMAIL_USER=your_gmail  
      EMAIL_PASS=gmail_passkey  
      PORT=4000  

   **Start the Backend Server :**   
    node index.js

   **Install Frontend Dependencies :**  
    
     Open a new terminal and navigate to the client directory:  
      cd ../client  
      npm install
     
     Set Up Frontend Environment Variables  
      Create Urls.js file in your src folder and store your base url as  
      export const baseUrl=your_base_url  on local machine write here `http://localhost:3000`
   
    Start the Frontend Development Server  
      npm run start
   
    Usage
    Once both the backend and frontend servers are running,
    open your browser and go to http://localhost:3000 to access the application.


   **Thank you** for visiting **travo-APP**.
