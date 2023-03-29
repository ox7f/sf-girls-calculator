import { GoogleAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

export const AuthPage: React.FC = () => {
  const continueAsGuest = () => {
    signInAnonymously(auth);
  };

  const continueAsGoogleUser = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // TODO: Login / SignUp? continue as guest?
  // implement this
  return (
    <main>
      <div className="hero fullscreen hero-img parallax-img"></div>
      <div className="u-absolute u-z-0 hero fullscreen hero-img parallax-img">
        <div className="hero-body animated fadeIn u-center">
          <div className="frame" style={{ maxWidth: '500px' }}>
            <div className="frame__header">
              <div className="frame__title u-text-center">
                <h1>Hello</h1>
                <p className="subtitle" onClick={continueAsGoogleUser}>
                  Please choose how you want to proceed
                </p>
              </div>
              <div className="frame__subtitle u-text-center">Frame Subtitle</div>
              <div className="frame__subtitle u-text-center">This is the frame header.</div>
            </div>
            <div className="frame__body">
              <div className="frame__title u-text-center">Frame Body</div>
              <div className="frame__subtitle u-text-center">
                Insert any component here, including a frame navigation menu using
                <code>frame-nav</code>. The frame will auto-expand and if a specific height is set, a scrollbar will
                appear to take care of overflow.
              </div>
              <blockquote className="u-text-center">
                The text-white margins between the gray boxes is to demonstrate how the frame sub sections are
                separated.
              </blockquote>
            </div>
            <div className="frame__footer">
              <div className="frame__title u-text-center">Frame Footer</div>
              <div className="frame__subtitle u-text-center">Takes up the bottom of the frame.</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
