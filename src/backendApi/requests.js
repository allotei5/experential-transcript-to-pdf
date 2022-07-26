import api from "./api";

export const getUser = async () => {

    const res = await api.get('/react_check_login.php')
    return res
    
}

/**
 * It takes a studentId as a parameter, creates a new FormData object, appends the studentId to the
 * FormData object, and then sends the FormData object to the server.
 * 
 * The server then returns a response.
 * 
 * The response is returned to the calling function.
 * @param studentId - the student's id
 * @returns An object with a data property that the student data
 */
export const getStudentProfile = async (studentId) => {
    const formData = new FormData();
    formData.append('st', studentId);
    try {
        const res = await api.post('/react_get_user_profile.php', formData);
        return res;
    } catch (error) {
        return error
    }
    
}

export const getHours = async (studentId, pillar) => {
    const formData = new FormData();
    formData.append('st', studentId);
    formData.append('pil', pillar);
    const res = await api.post('/react_get_total_hours.php', formData);
    return res;
}

export const getExperiencesPerYear = async (studentId, level) => {
    const formData = new FormData();
    formData.append('st', studentId);
    formData.append('lev', level);
    const res = await api.post('/react_get_experience.php', formData);
    return res;
}