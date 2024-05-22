// // // Footer.js
// // import React from 'react';

// // export default function Footer() {
// //   return (
// //     <footer className="bg-blue-100 text-center bottom-0 py-4">
// //       <p className="text-gray-700">© 2024 Your Company. All rights reserved.</p>
// //     </footer>
// //   );
// // }

// // Footer.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Footer() {
//   return (
//     <footer className="bg-gray-200 text-center py-4">
     
//       <div className="flex justify-center space-x-6 mb-4">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//           <svg className="w-8 h-8 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24H12.82V14.708H9.692v-3.64h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.098 2.797.142v3.24h-1.92c-1.507 0-1.799.717-1.799 1.768v2.316h3.594l-.468 3.64h-3.126V24h6.13c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z"/>
//           </svg>
//         </a>
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <svg className="w-8 h-8 text-blue-500 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M23.954 4.569c-.885.385-1.83.647-2.825.765 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .385.045.759.127 1.117-4.083-.201-7.702-2.161-10.126-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.956 2.445 3.377 4.604 3.417-1.68 1.315-3.809 2.101-6.104 2.101-.395 0-.779-.023-1.161-.067 2.189 1.402 4.768 2.217 7.548 2.217 9.057 0 14.009-7.497 14.009-13.985 0-.209 0-.42-.016-.63.961-.694 1.797-1.562 2.457-2.549z"/>
//           </svg>
//         </a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//           <svg className="w-8 h-8 text-pink-600 hover:text-pink-800" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.583 2.163 15.203 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.771.129 4.669.35 3.75 1.27 2.83 2.19 2.608 3.292 2.548 4.572.512 8.741.5 8.332.5 12s.012 3.259.07 4.538c.06 1.28.282 2.382 1.202 3.302.92.92 2.022 1.142 3.302 1.202 1.28.058 1.689.07 4.538.07s3.259-.012 4.538-.07c1.28-.06 2.382-.282 3.302-1.202.92-.92 1.142-2.022 1.202-3.302.058-1.28.07-1.689.07-4.538s-.012-3.259-.07-4.538c-.06-1.28-.282-2.382-1.202-3.302-.92-.92-2.022-1.142-3.302-1.202C15.259.012 14.668 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.328c-2.297 0-4.166-1.869-4.166-4.166S9.703 7.834 12 7.834s4.166 1.869 4.166 4.166-1.869 4.166-4.166 4.166zm6.406-10.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
//           </svg>
//         </a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//           <svg className="w-8 h-8 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.024-3.062-1.865-3.062-1.865 0-2.151 1.456-2.151 2.963v5.703h-3v-11h2.882v1.501h.041c.401-.76 1.381-1.561 2.84-1.561 3.037 0 3.6 2.002 3.6 4.605v6.455z"/>
//           </svg>
//         </a>
//       </div> 
//      <div className="flex items-center justify-between p-4">
   

// <div className="flex justify-center space-x-4 text-gray-700">
//   <p className="text-base">© 2024 travo-APP, Inc.Privacy  Terms  Sitemap Company details</p>
//   <Link to="/About" className="text-base hover:underline">@About</Link>
//   <Link to="/Contact" className="text-base hover:underline">Contact us</Link>
  
// </div>
// <p className="text-gray-700 text-base mt-2">
//         Made with <span role="img" aria-label="love">❤️</span> by Aditya Verma
//       </p>

//  </div>
//     </footer>
//   );
// }


import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <svg className="w-8 h-8 text-blue-600 hover:text-blue-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24H12.82V14.708H9.692v-3.64h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.098 2.797.142v3.24h-1.92c-1.507 0-1.799.717-1.799 1.768v2.316h3.594l-.468 3.64h-3.126V24h6.13c.732 0 1.326-.593 1.326-1.326V1.326C24 .593 23.407 0 22.676 0z"/>
          </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <svg className="w-8 h-8 text-blue-500 hover:text-blue-700" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569c-.885.385-1.83.647-2.825.765 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.917 2.201-4.917 4.917 0 .385.045.759.127 1.117-4.083-.201-7.702-2.161-10.126-5.144-.423.722-.666 1.561-.666 2.475 0 1.708.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.956 2.445 3.377 4.604 3.417-1.68 1.315-3.809 2.101-6.104 2.101-.395 0-.779-.023-1.161-.067 2.189 1.402 4.768 2.217 7.548 2.217 9.057 0 14.009-7.497 14.009-13.985 0-.209 0-.42-.016-.63.961-.694 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="https://instagram.com/adityaverma.423" target="_blank" rel="noopener noreferrer">
        <svg className="w-8 h-8 text-pink-600 hover:text-pink-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.583 2.163 15.203 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.771.129 4.669.35 3.75 1.27 2.83 2.19 2.608 3.292 2.548 4.572.512 8.741.5 8.332.5 12s.012 3.259.07 4.538c.06 1.28.282 2.382 1.202 3.302.92.92 2.022 1.142 3.302 1.202 1.28.058 1.689.07 4.538.07s3.259-.012 4.538-.07c1.28-.06 2.382-.282 3.302-1.202.92-.92 1.142-2.022 1.202-3.302.058-1.28.07-1.689.07-4.538s-.012-3.259-.07-4.538c-.06-1.28-.282-2.382-1.202-3.302-.92-.92-2.022-1.142-3.302-1.202C15.259.012 14.668 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.328c-2.297 0-4.166-1.869-4.166-4.166S9.703 7.834 12 7.834s4.166 1.869 4.166 4.166-1.869 4.166-4.166 4.166zm6.406-10.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/aditya-verma10/" target="_blank" rel="noopener noreferrer">
        <svg className="w-8 h-8 text-blue-700 hover:text-blue-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.25 12.268h-3v-5.604c0-1.337-.024-3.062-1.865-3.062-1.865 0-2.151 1.456-2.151 2.963v5.703h-3v-11h2.882v1.501h.041c.401-.76 1.381-1.561 2.84-1.561 3.037 0 3.6 2.002 3.6 4.605v6.455z"/>
          </svg>
        </a>
      </div> 

      <div className="flex justify-center space-x-4 text-gray-700">
        <p className="text-base">© 2024 travo-APP, Inc. Privacy Terms Sitemap Company details</p>
        <Link to="/About" className="text-base hover:underline">@About</Link>
        <Link to="/Contact" className="text-base hover:underline">Contact us</Link>
      </div>

      <p className="text-gray-700 text-base mt-2">
        Made with <span role="img" aria-label="love">❤️</span> by Aditya Verma
      </p>
    </footer>
  );
}
