import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';
import '../theme/styles.css';
import 'antd/dist/antd.css';
import '../index.css';
// import { wrapper } from "../config-store";
// import { useDispatch } from 'react-redux';
// import { signInWithEmail } from 'modules/auth/actions';

const CustomApp = ({ Component, pageProps }) => {
  // const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(signInWithEmail({user: '',data:''}))
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return <Component {...pageProps} />;
}

// export default wrapper.withRedux(CustomApp);
export default CustomApp;
