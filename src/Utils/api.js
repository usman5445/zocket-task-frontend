import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const getAllCampaigns = async () => {
  return await axios.get(`${REACT_APP_BACKEND_URL}/campaigns`);
};

export const newCampaign = async (data) => {
  return await axios.post(`${REACT_APP_BACKEND_URL}/campaigns`, {
    ...data,
  });
};

export const updateCampaign = async (data) => {
  return await axios.put(`${REACT_APP_BACKEND_URL}/campaigns/${data._id}`, {
    ...data,
  });
};

export const deleteCampaign = async (_id) => {
  return await axios.delete(`${REACT_APP_BACKEND_URL}/campaigns/${_id}`);
};

export const getAllProducts = async () => {
  return await axios.get(`${REACT_APP_BACKEND_URL}/products`);
};
