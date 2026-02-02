import axios from 'axios';

// Replace this with your actual Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxfi89IPHKMsIjJcDiwL1m6jYlGla8-uZShOi67wAfy6oR7w8AlZVQ279lebyiLtvb-/exec';

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