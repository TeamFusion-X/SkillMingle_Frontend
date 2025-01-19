import axiosInstance from "./axiosInstance";

export const searchSkillsAPI = async(skill) => {
    try {
		const response = await axiosInstance.get(`/search/${skill}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error searching:", error);
        throw error;
	}
}

