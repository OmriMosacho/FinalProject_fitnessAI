import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://127.0.0.1:5000/api', ec2-3-79-247-120.eu-central-1.compute.amazonaws.com
  baseURL: 'http://ec2-3-66-236-149.eu-central-1.compute.amazonaws.com:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': "*",
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
  },
});

export const Login = async (userName: string, password: string) => {
  try {
    const response = await api.post('/login', {
      "user_name": userName,
      "password": password
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const Register = async (userName: string, password: string, age: Number, sex: string, height: Number, weight: Number, fullName: string) => {
  try {
    const response = await api.post('/register', {
      "user_name": userName,
      "password": password,
      "age": age,
      "sex": sex,
      "height": height,
      "weight": weight,
      "fullName": fullName
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const StartTracking = async (userName: string) => {
  try {
    const response = await api.post('/start_tracking_training', {
      "user_name": userName,
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const TrackingResource = async (userName: string, trackingNumber: string, imageHash: string) => {
  try {
    const response = await api.post('/track_training', {
      "user_name": userName,
      "training_id": trackingNumber,
      "image_hash": imageHash,
      "timestamp": Date.now()
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const DeleteTraining = async (userName: string, trackingNumber: string) => {
  try {
    const response = await api.post('/delete_training', {
      "user_name": userName,
      "training_id": trackingNumber
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const FinishTraining = async (userName: string, trackingNumber: string) => {
  try {
    const response = await api.post('/finish_training', {
      "user_name": userName,
      "training_id": trackingNumber
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const GetTrainingResults = async (trackingNumber: number) => {
  try {
    const response = await api.get('/training_results',
      {
        params: {
          "training_id": trackingNumber
        }
      });

    return response;
  } catch (response) {
    return response;
  }
};

export const AnalyzeTraining = async (userName: string, trackingNumber: string) => {
  try {
    const response = await api.post('/analyze', {
      "user_name": userName,
      "training_id": trackingNumber
    });

    return response;
  } catch (response) {
    return response;
  }
};

export const ResultsAvailable = async (trackingNumber: number) => {
  try {
    const response = await api.get('/results_available',
      {
        params: {
          "training_id": trackingNumber
        }
      });

    return response.data;
  } catch (response) {
    return response;
  }
};