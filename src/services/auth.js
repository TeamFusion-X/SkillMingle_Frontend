import axiosInstance from './axiosInstance'; 

export const loginAPI = async (credentials) => {
  try {
    const response = await axiosInstance.post('/users/login', credentials);
    return response.data;
  } catch (error) {
    if(error.response.data) error.message = error.response.data.message;
    console.error('Login error:', error);
    throw error;
  }
};

export const signupAPI = async (signupData) => {
    try {
        const response = await axiosInstance.post('/users/signup', signupData);
        return response.data;
    } catch (error) {
        if(error.response.data) error.message = error.response.data.message;
        console.error('Signup error:', error);
        throw error;
    }
}

export const forgotPassAPI = async () => {

}

export const resetPassAPI = async () => {

}


