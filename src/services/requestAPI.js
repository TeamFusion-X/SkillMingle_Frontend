import axiosInstance from "./axiosInstance";

export const getRequestsAPI = async() => {
    try {
		const response = await axiosInstance.get("/requests/");
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error fetching requests:", error);
        throw error;
	}
}

export const sendRequestAPI = async(skill, username) => {
	try {
		const response = await axiosInstance.get(`requests/send/${skill}/${username}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error sending request:", error);
        throw error;
	}
}

export const teachFreeAPI = async(requestID) => {
	try {
		const response = await axiosInstance.get(`/requests/accept/${requestID}/teachFree`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error accepting request:", error);
        throw error;
	}
}

export const teachPaidAPI = async(requestID) => {
	try {
		const response = await axiosInstance.get(`/requests/accept/${requestID}/teachPaid`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error accepting request:", error);
        throw error;
	}
}

export const skillShareGetSkillsAPI = async(requestID) => {
	try {
		const response = await axiosInstance.get(`requests/accept/${requestID}/skillShare`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error getting user skills:", error);
        throw error;
	}
}

export const skillShareAPI = async(requestID, skill) => {
	try {
		const response = await axiosInstance.get(`/requests/accept/${requestID}/skillShare/${skill}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error accepting requests:", error);
        throw error;
	}
}

export const rejectRequestAPI = async(requestID) => {
	try {
		const response = await axiosInstance.get(`requests/reject/${requestID}`);
		return response.data;
	} catch (error) {
		if (error.response.data) error.message = error.response.data.message;
		console.error("Error fetching requests:", error);
        throw error;
	}
}