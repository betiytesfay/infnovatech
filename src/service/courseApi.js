const API_BASE_URL = 'https://infnova-course-api.vercel.app/api';

export const fetchAllCourses = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses`);
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const fetchCourseById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/courses/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch course');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching course:', error);
    throw error;
  }
};