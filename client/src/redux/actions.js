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

// my car actions
export const GET_MY_CARS = 'GET_MY_CARS';
export const GetMyCars = () => {
    return makeAction(GET_MY_CARS);
};
export const MY_CARS_FETCHING = 'MY_CARS_FETCHING';
export const MyCarsFetching = () => {
    return makeAction(MY_CARS_FETCHING);
};
export const MY_CARS_RECEIVED = 'MY_CARS_RECEIVED';
export const MyCarsReceived = (data) => {
    return makeAction(MY_CARS_RECEIVED, data);
};
export const MY_CARS_ERROR = 'MY_CARS_ERROR';
export const MyCarsError = (errors) => {
    return makeAction(MY_CARS_ERROR, errors);
};

// car additional information actions
export const GET_CARS_ADDITIONAL_INFORMATION = 'GET_CARS_ADDITIONAL_INFORMATION';
export const CARS_ADDITIONAL_INFORMATION_FETCHING = 'CARS_ADDITIONAL_INFORMATION_FETCHING';
export const CARS_ADDITIONAL_INFORMATION_RECEIVED = 'CARS_ADDITIONAL_INFORMATION_RECEIVED';
export const CARS_ADDITIONAL_INFORMATION_ERROR = 'CARS_ADDITIONAL_INFORMATION_ERROR';

export const GetCarsAdditionalInformation = () => {
    return makeAction(GET_CARS_ADDITIONAL_INFORMATION);
};
export const CarsAdditionalInformationFetching = () => {
    return makeAction(CARS_ADDITIONAL_INFORMATION_FETCHING);
};
export const CarsAdditionalInformationReceived = (data) => {
    return makeAction(CARS_ADDITIONAL_INFORMATION_RECEIVED, data);
};
export const CarsAdditionalInformationError = (error) => {
    return makeAction(CARS_ADDITIONAL_INFORMATION_ERROR, error);
};
