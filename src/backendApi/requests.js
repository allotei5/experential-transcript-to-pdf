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

/**
 * It takes a studentId and a pillar and returns the total hours for that student and pillar.
 * @param studentId - the student's id
 * @param pillar - 1, 2, 3
 * @returns The response from the server.
 */
export const getHours = async (studentId, pillar) => {
    const formData = new FormData();
    formData.append('st', studentId);
    formData.append('pil', pillar);
    const res = await api.post('/react_get_total_hours.php', formData);
    return res;
}

/**
 * It takes a student ID and a level, and returns the experiences for that student at that level
 * @param studentId - the student's id
 * @param level - 1, 2, 3, 4
 * @returns An object with a property called data.
 */
export const getExperiencesPerYear = async (studentId, level) => {
    const formData = new FormData();
    formData.append('st', studentId);
    formData.append('lev', level);
    const res = await api.post('/react_get_experience.php', formData);
    return res;
}

/**
 * It takes a studentId and a category and returns the experiences that match the category.
 * @param studentId - the student's id
 * @param cat - category
 * @returns An array of objects.
 */
export const getExperiencesPerCat = async (studentId, cat) => {
    const formData = new FormData();
    formData.append('st', studentId)
    formData.append('cat', cat)
    const res = await api.post('react_get_exp_logo.php', formData);
    return res;
}