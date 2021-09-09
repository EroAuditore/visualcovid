import axios from 'axios';

const LOAD_DATA = 'LOAD_DATA';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

const COUNTRY_DATA = 'COUNTRY_DATA';
const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS';
const COUNTRY_FAIL = 'COUNTRY_FAIL';

const DETAIL_DATA = 'DETAIL_DATA';
const DETAIL_SUCCESS = 'DETAIL_SUCCESS';
const DETAIL_FAIL = 'DETAIL_FAIL';

const initialState = {
  worldData: {},
  countries: [],
  country: {},
  countryName: '',
};

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

const detailData = (payload) => ({
  type: DETAIL_DATA,
  payload,
});

const detailSuccess = (payload) => ({
  type: DETAIL_SUCCESS,
  payload,
});

const detailFail = (payload) => ({
  type: DETAIL_FAIL,
  payload,
});

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

    case DETAIL_DATA:
      return { ...state, countryName: action.payload };
    case DETAIL_SUCCESS:
      return { ...state, country: action.payload };
    case DETAIL_FAIL:
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

const fetchDetail = (country) => (dispatch) => {
  dispatch(detailData(country));
  axios
    .get(`${endPoint}countries/${country}`)
    .then((response) => {
      if (response.data !== '') {
        dispatch(detailSuccess(response.data));
      }
    })
    .catch(() => {
      dispatch(detailFail());
    });
};
export {
  covidReducer,
  loadSuccess,
  loadFail,
  loadData,
  fetchInitialData,
  fetchCountry,
  fetchDetail,
};
