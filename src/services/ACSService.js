import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

export async function fetchTwoBedroomRent(zipCode) {
  const apiKey = process.env.USCB_API_KEY; // Replace with your actual API key
  const baseUrl = 'https://api.census.gov/data';
  const year = '2021';
  const dataset = 'acs/acs5';
  const variables = 'B25031_004E,B25031_004M'; // B25031_004E for 2-bedroom rent, B25031_004M for its margin of error
  const url = `${baseUrl}/${year}/${dataset}?get=${variables}&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data[1]; // Assuming the first row of response data is headers and the second row is the actual data
    console.log(data)
    const estimatedRent = data[0];
    const marginOfError = data[1];

    console.log(`Estimated 2-bedroom rent for ZIP code ${zipCode}: $${estimatedRent}, Margin of Error: $${marginOfError}`);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchTwoBedroomRent('46368'); // Example ZIP code
