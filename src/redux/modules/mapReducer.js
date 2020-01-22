import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
  mapCreated: false,
  layout: 'single',
  mapMode: 'pan',
  projection: {
    code: 'EPSG:3857',
    name: 'Mercator'
  },
  boundingBox: {
    title: 'Northern Europe',
    bbox: [
      9783.9814,
      7073788.4324,
      4045658.9844,
      11574400.6058
    ]
  }
};
// Actions
const CREATE_MAP = 'CREATE_MAP';
const SET_CUT = 'SET_CUT';
const SET_PROJECTION = 'SET_PROJECTION';
const SET_MAP_MODE = 'SET_MAP_MODE';

const createMap = createAction(CREATE_MAP);
const setCut = createAction(SET_CUT);
const setMapMode = createAction(SET_MAP_MODE);
const setProjection = createAction(SET_PROJECTION);

export const actions = {
  createMap,
  setCut,
  setMapMode,
  setProjection
};

export default handleActions({
  [CREATE_MAP]: state => ({ ...state, mapCreated: true }),
  [SET_CUT]: (state, { payload }) => (
    {
      ...state,
      boundingBox: { title: payload.title, bbox: payload.bbox },
      projection: payload.projection ? payload.projection : { name: 'Mercator', code: 'EPSG:3857' }
    }),
  [SET_MAP_MODE]: (state, { payload }) => ({ ...state, mapMode: payload }),
  [SET_PROJECTION]: (state, { payload }) => ({ ...state, projection: { name: payload.title, code: payload.code }, boundingBox: { title: 'Custom', bbox: payload.bbox } })
}, INITIAL_STATE);
