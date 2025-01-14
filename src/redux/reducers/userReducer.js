import { UPDATE_USER, FAILURE, CLEAR_MESSAGE } from "../actions/userAction";

const initialState = {
    _id: null,
    username: null,
    name: null,
    email: null,
    displayPicture: null,
    learningConversations: [],
    numberOfRatings: 0,
    requestsReceived: [],
    reviews: [],
    skillsToLearn: [],
    skillsToTeach: [],
    teachingConversations: [],
    teachingRating: 0,
    userSkills: [],
    bio: null,
};

const userReducer = (state = initialState, action) => {

    console.log("Action Type:", action.type);  
    console.log("Action Payload:", action.payload);
    switch(action.type){
        case UPDATE_USER :
            return {
                ...state,
                ...action.payload,
                error : null,
            };

        case FAILURE :
            return {
                ...state,
                error : action.payload,
            };

        case CLEAR_MESSAGE :
            return {
                ...state,
                error : null,
                message : null,
            };
        
        default:
            return state;
    }
}

export default userReducer;