import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      Sign In Component
      <button onClick={ logGoogleUser }>Sign With Google Popup</button>
    </div>
  );
};

export default SignIn;