import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Places from './pages/tasks';
import PlaceLists from './pages/placelists';
import Map from './pages/maps';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  Places: '/',
  PlaceLists: '/place-lists',
  MAP: '/maps'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.PLACES);
    }
  };
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Places,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      },
      {
        path: paths.PlaceLists,
        component: PlaceLists,
        onEnter: requireUnauth(getState)
      },
      {
        path: paths.MAP,
        component: Map,
        onEnter: requireUnauth(getState)
      }
    ]
  };
};
