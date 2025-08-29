const API_URL = 'http://localhost:5001/api';
// const API_URL = 'https://srv942210.hstgr.cloud/api';

/**
 * Fetches rates for a specific trip by its ID
 * @param {string|number} tripId - The ID of the trip to get rates for
 * @returns {Promise<Array>} A promise that resolves to an array of rates for the trip
 * @throws {Error} If the request fails or returns an error status
 */
export const getRatesByTripId = async (tripId) => {
  try {
    const response = await fetch(`${API_URL}/rates/trip/${tripId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to fetch rates');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching rates for trip ${tripId}:`, error);
    throw error;
  }
};

// Add more rate-related service methods here as needed
