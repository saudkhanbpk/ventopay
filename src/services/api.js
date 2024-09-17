import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

// Fetch functions
export const fetchAdvertisers = () => axios.get(`${API_BASE_URL}/advertisers`);
export const fetchBrands = () => axios.get(`${API_BASE_URL}/brands`);

// Registration functions
export const registerAdvertiser = (data) =>
  axios.post(`${API_BASE_URL}/advertisers/register`, data);
export const registerBrand = (data) =>
  axios.post(`${API_BASE_URL}/brands/register`, data);

