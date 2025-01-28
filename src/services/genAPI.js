import axiosInstance from "./axiosInstance";

export const getResponseAPI = async(prompt) => {
    try {
		const response = await axiosInstance.post("/genAI/getResponse", {prompt});
		return response.data.response;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error getting response", error);
        throw error;
	}
}