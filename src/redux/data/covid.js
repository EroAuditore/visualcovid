import axios from 'axios';

const LOAD_DATA = 'LOAD_DATA';
const LOAD_SUCCESS = 'LOAD_SUCCESS';
const LOAD_FAIL = 'LOAD_FAIL';

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

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state };
    case LOAD_SUCCESS:
      return { ...state, worldData: action.payload };
    case LOAD_FAIL:
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

export {
  covidReducer, loadSuccess, loadFail, loadData, fetchInitialData,
};
