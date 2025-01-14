import axiosInstance from "./axiosInstance";

export const getUserProfileAPI = async () => {
    try {
        const response = await axiosInstance.get("/users/me");
        return response.data;
    } catch (error) {
        if (error.response?.data) error.message = error.response.data.message;
        console.error("Get profile error:", error);
        throw error;
    }
};

export const updateUserProfileAPI = async () => {
    try {
        const response = await axiosInstance.patch("/users/updateMe");
        return response.data;
    } catch (error) {
        if(error.response?.data) error.message = error.response.data.message;
        console.error("Get profile Update error:", error);
        throw error;
    }
}