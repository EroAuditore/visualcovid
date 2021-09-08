import axios from 'axios';

const LOAD_DATA = 'LOAD_DATA';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const COUNTRY_DATA = 'COUNTRY_DATA';
const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
const COUNTRY_FAIL = 'COUNTRY_FAIL';

// const FILTER_DATA = 'FILTER_DATA';
// const CANCEL_FILTER = 'FILTER_DATA';

const initialState = { worldData: {}, countries: [], detail: {} };

const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload,
});

const loadFail = (payload) => ({
  type: LOAD_FAIL,
  payload,
});

const countryData = (payload) => ({
  type: COUNTRY_DATA,
  payload,
});

const countrySuccess = (payload) => ({
  type: COUNTRY_SUCCESS,
  payload,
});

const countryFail = (payload) => ({
  type: COUNTRY_FAIL,
  payload,
});

// const filterData = (payload) => ({
//   type: FILTER_DATA,
//   payload,
// });

// const cancelFilter = (payload) => ({
//   type: FILTER_DATA,
//   payload,
// });

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, worldData: action.payload };
    case LOAD_FAIL:
      return { ...state };
    case COUNTRY_DATA:
      return { ...state };
    case COUNTRY_SUCCESS:
      return { ...state, countries: action.payload };
    case COUNTRY_FAIL:
      return { ...state };
    default:
      return state;
  }
};

const endPoint = 'https://covid19.mathdro.id/api/';

const fetchInitialData = () => (dispatch) => {
  dispatch(loadData());
  axios
    .get(`${endPoint}`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(loadSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(loadFail());
    });
};

const fetchCountry = () => (dispatch) => {
  dispatch(countryData());
  axios
    .get(`${endPoint}countries`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(countrySuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(countryFail());
    });
};

export {
  covidReducer,
  loadSuccess,
  loadFail,
  loadData,
  fetchInitialData,
  fetchCountry,
};
