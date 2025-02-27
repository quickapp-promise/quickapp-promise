import geolocation from '@system.geolocation';
import { quickPromiseFunctor } from '../tools';

const getLocation = quickPromiseFunctor(geolocation.getLocation, 'success');

const openLocation = quickPromiseFunctor(geolocation.openLocation, 'success');

const chooseLocation = quickPromiseFunctor(geolocation.chooseLocation, 'success');

const getLocationType = quickPromiseFunctor(geolocation.getLocationType, 'success');

const subscribe = quickPromiseFunctor(geolocation.subscribe, 'success');

const unsubscribe = geolocation.unsubscribe;

const getSupportedCoordTypes = geolocation.getSupportedCoordTypes;

const geocodeQuery = quickPromiseFunctor(geolocation.geocodeQuery, 'success');

const reverseGeocodeQuery = quickPromiseFunctor(geolocation.reverseGeocodeQuery, 'success');

export default {
  getLocation,
  openLocation,
  chooseLocation,
  getLocationType,
  subscribe,
  unsubscribe,
  getSupportedCoordTypes,
  geocodeQuery,
  reverseGeocodeQuery,
}
