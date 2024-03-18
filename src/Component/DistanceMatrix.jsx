export const calculateDistance = async () => {
    const origin = 'Your Origin Address';
    const destination = 'Your Destination Address';
    const apiKey = 'Your Google Maps API Key';

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${apiKey}`
      );

      const distanceValue = response.data.rows[0].elements[0].distance.text;
      setDistance(distanceValue);
    } catch (error) {
      console.error('Error fetching distance:', error);
    }
  };
