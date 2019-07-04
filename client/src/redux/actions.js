const makeAction = (type, payload = {}) => {
    return {
        type,
        payload
    }
};


// settings actions
export const SETTINGS_CHANGED = 'SETTINGS_CHANGED';
export const SettingsChanged = (key, value) => {
    return makeAction(SETTINGS_CHANGED, { key, value });
};


// user actions
export const LOG_IN = 'LOG_IN';
export const LogIn = (email, password) => {
    return makeAction(LOG_IN, { email, password });
};
export const USER_IS_AUTHORIZED = 'USER_IS_AUTHORIZED';
export const UserIsAuthorized = (data) => {
    return makeAction(USER_IS_AUTHORIZED, data);
};
export const USER_IS_UNAUTHORIZED = 'USER_IS_UNAUTHORIZED';
export const UserIsUnauthorized = () => {
    return makeAction(USER_IS_UNAUTHORIZED);
};
export const LOG_IN_FETCHING = 'LOG_IN_FETCHING';
export const UserLoginFetching = () => {
    return makeAction(LOG_IN_FETCHING);
};
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UpdateProfile = (profile) => {
    return makeAction(UPDATE_PROFILE, { profile });
};
export const UPDATE_PROFILE_FETCHING = 'UPDATE_PROFILE_FETCHING';
export const UpdateProfileFetching = () => {
    return makeAction(UPDATE_PROFILE_FETCHING);
};
export const PROFILE_UPDATED = 'PROFILE_UPDATED';
export const ProfileUpdated = (profile) => {
    return makeAction(PROFILE_UPDATED, { profile });
};


// car actions
export const GET_CARS = 'GET_CARS';
export const GetCars = (currentlyLogedUser = null) => {
    return makeAction(GET_CARS, { currentlyLogedUser });
};
export const CARS_FETCHING = 'CARS_FETCHING';
export const CarsFetching = () => {
    return makeAction(CARS_FETCHING);
};
export const CARS_RECEIVED = 'CARS_RECEIVED';
export const CarsReceived = (data) => {
    return makeAction(CARS_RECEIVED, data);
};
export const CARS_ERROR = 'CARS_ERROR';
export const CarsError = (errors) => {
    return makeAction(CARS_ERROR, errors);
};