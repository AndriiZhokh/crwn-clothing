import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
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

  return (
    <div>
      Sign In Component
      <button onClick={ logGoogleUser }>Sign With Google Popup</button>
      <button onClick={ signInWithGoogleRedirect }>Sign With Google Redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;