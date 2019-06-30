const makeAction = (type, payload = {}) => {
    return {
        type,
        payload
    }
}

export const SETTINGS_CHANGED = 'SETTINGS_CHANGED';
export const SettingsChanged = (key, value) => {
    return makeAction(SETTINGS_CHANGED, { key, value });
}

export const LOG_IN = 'LOG_IN';
export const LogIn = (email, password) => {
    return makeAction(LOG_IN, { email, password });
}

export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';
export const UserIsAuthorized = (user) => {
    return makeAction(USER_IS_AUTHORIZED, { user });
}
export const LOG_IN_FETCHING = 'LOG_IN_FETCHING';
export const UserLoginFetching = () => {
    return makeAction(LOG_IN_FETCHING);
}