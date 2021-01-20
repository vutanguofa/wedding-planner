import React, {} from 'react';
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

const Signup = () => {
  // const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  // const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value
  //   });
  // };

  // submit form
  // const handleFormSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...formState }
  //     });

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-15 col-md-15">
        <div className="card">
          <h4 className="card-header">Wedding Fund</h4>
          <div className="card-body">
            <center><form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="JEHZ4E6VTEE8G" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form></center>
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p><br />
              <ul>
                <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</li>
                <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</li>
                <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                <li>Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</li>
              </ul>
            {/* {error && <div>Signup failed</div>} */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
