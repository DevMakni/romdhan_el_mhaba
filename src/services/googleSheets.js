import axios from 'axios';

// Use environment variable for Google Apps Script Web App URL
const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

// Get current volunteer count
export const getVolunteerCount = async () => {
  try {
    const response = await axios.get(SCRIPT_URL);
    return response.data.count || 0;
  } catch (error) {
    console.error('Error fetching volunteer count:', error);
    return 0;
  }
};

// Submit volunteer form data
export const submitVolunteer = async (formData) => {
  try {
    const response = await axios.post(SCRIPT_URL, formData, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting volunteer:', error);
    throw error;
  }
};