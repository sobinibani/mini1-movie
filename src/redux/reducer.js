import {LOGGED_IN, LOGGED_OUT} from './actions'

const initialState = {
    isLoggedIn: false
}

const handleLogin = (state = initialState, action) => {
    switch (action.type) {
      case LOGGED_IN:
        console.log('true')
        return {
            ...state,
            isLoggedIn: true,
        };
        case LOGGED_OUT:
          console.log('false')
        return {
          ...state,
          isLoggedIn: false
        };
      default:
        return state;
    }
  };

export default handleLogin;