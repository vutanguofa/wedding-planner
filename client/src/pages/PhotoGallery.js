import React, { useState } from 'react';
import Images from './Images';
import './styles.css';
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({ username: '', email: '', password: '' });
//   const [addUser, { error }] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = event => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value
//     });
//   };

//   // submit form
//   const handleFormSubmit = async event => {
//     event.preventDefault();

//     try {
//       const { data } = await addUser({
//         variables: { ...formState }
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-md-6">
//         <div className="card">
//           <h4 className="card-header">Photo Gallery</h4>
//           <div className="card-body">


//             {/* {error && <div>Signup failed</div>} */}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;

export default function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (

    <div className="card">
      <h4 className="card-header">Photo Gallery</h4>
      <div className="card-body">
        <div className="App">
          <div className="container2">
            <img src={selectedImg} alt="Selected" className="selected" />
            <div className="imgContainer2">
              {Images.map((img, index) => (
                <img
                  style={{ border: selectedImg === img ? "4px solid pink" : "" }}
                  key={index}
                  src={img}
                  alt="dog"
                  onClick={() => setSelectedImg(img)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
