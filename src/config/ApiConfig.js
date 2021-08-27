export const ApiConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const ProtectedApiConfig = {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
};

export const ProtectedImageApiConfig = {
  headers: {
    "x-auth-token": localStorage.getItem("token"),
    headers: { "Content-Type": "multipart/form-data" },
  },
};

export const backendURL = "http://340d-2400-adc1-1bd-5500-5ced-cc9d-ffce-b404.ngrok.io";
// export const Config = {
//   headers: { "x-auth-token": localStorage.getItem("token") },
// };

// const bkUrl = () => 'http://localhost:4000/uploads';

// export const buildPathToImage = ({ id, path, ext } = {}) =>
//   new URL(`${path}/${id}${ext}`, bkUrl);
