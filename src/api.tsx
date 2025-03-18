import axios from 'axios';

const fetchPilotageData = async (imo: string) => {
  try {
    const response = await axios.get(`https://uat.engineering.sgtradex.net/api/v1/pilotage/${imo}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pilotage data", error);
    return null;
  }
};

export default fetchPilotageData;