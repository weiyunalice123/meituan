import axios from './index';

export const getHomeData = () => axios.get("/mock/home.json");

export const getMyStoreData = () => axios.get("/mock/myStore.json");