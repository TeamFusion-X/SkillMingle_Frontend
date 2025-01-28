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

export const updateUserProfileAPI = async (updatedData) => {
    try {
        const response = await axiosInstance.patch("/users/updateMe", updatedData);
        return response.data;
    } catch (error) {
        if(error.response?.data) error.message = error.response.data.message;
        console.error("Get profile Update error:", error);
        throw error;
    }
}

export const updateUserProfileDPAPI = async (imageFile) => {
    try {
        const formData = new FormData(); // to handle image data correctly
        formData.append("DP", imageFile); // Attach the file to the request

        const response = await axiosInstance.patch("/users/updateDP", formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Required for file uploads
            },
        });

        return response.data; 
    } catch (error) {
        if (error.response?.data) error.message = error.response.data.message;
        console.error("Profile picture update error:", error);
        throw error;
    }
}

export const updateUserPasswordAPI = async (newPassword) => {
    try {
        const response = await axiosInstance.patch("/users/updateMyPassword", newPassword);
        return response.data;
    } catch (error) {
        if(error.response?.data) error.message = error.response.data.message;
        console.error("Password Update error:", error);
        throw error;
    }
}

export const getUserProfileOpenAPI = async(username) => {
    try {
        const response = await axiosInstance.get(`users/about/${username}`);
        return response.data.user;
    } catch (error) {
        if(error.response?.data) error.message = error.response.data.message;
        console.error("Get profile error:", error);
        throw error;
    }
}
