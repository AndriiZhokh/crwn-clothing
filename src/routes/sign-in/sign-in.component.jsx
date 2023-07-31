import { useEffect, useState } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  createUserDocumentFromAuth,
  signInWithCredentials,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const defaultformFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [ formFields, setFormFields ] = useState(defaultformFields);
  const { email, password } = formFields;

  useEffect(() => {
    async function redirectResult() {
      const response = await getRedirectResult(auth);

      if (response) {
        const { user } = response
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    }

    redirectResult();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithCredentials(email, password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: '30%' }}>
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
      </form>

      <Button buttonType="google" onClick={ logGoogleUser }>Sign With Google Popup</Button>
      <Button buttonType="google" onClick={ signInWithGoogleRedirect }>Sign With Google Redirect</Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;