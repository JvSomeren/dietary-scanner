import { NavigationActions, NavigationEvents } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function getCurrentRoute() {
  let route = _navigator.state.nav;

  while(route.routes) {
    route = route.routes[route.index];
  }

  return route;
}

function forceRender() {
  console.log( getCurrentRoute() );
  const currentRouteName = getCurrentRoute().routeName;

  navigate( 'Welcome' );
  navigate( currentRouteName );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  forceRender
};