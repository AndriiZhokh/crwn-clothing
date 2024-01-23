import './sign-in-form.styles.scss';

import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithCredentials,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../../components/form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';

const defaultformFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultformFields);
  const { email, password } = formFields;


  useEffect(() => {
    async function redirectResult() {
      await getRedirectResult(auth);
    }

    redirectResult();
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithCredentials(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorect password for email');
          break;
        case 'auth/user-not-found':
          alert('User not found');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={ handleSubmit }>
        <FormInput
          label="email"
          type="email"
          required
          onChange={ handleChange }
          name="email"
          value={ email }
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={ handleChange }
          name="password"
          value={ password }
        />
      
        <Button type="submit">Sign in</Button>
        <div className="buttons-container">
          <Button
            buttonType={ BUTTON_TYPE_CLASSES.google }
            onClick={ logGoogleUser } type="button"
          >
            Sign With Google Popup
          </Button>

          <Button
            buttonType={ BUTTON_TYPE_CLASSES.google }
            onClick={ signInWithGoogleRedirect }
            type="button"
          >
            Sign With Google Redirect
          </Button>
        </div>
      </form>

    </div>
  );
};

export default SignInForm;
