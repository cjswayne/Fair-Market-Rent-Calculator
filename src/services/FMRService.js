import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()

export async function testFMR(){
    const apiKey = process.env.FMR_API_KEY; // Replace with your actual API key
    const baseUrl = 'https://www.huduser.gov/hudapi/public/fmr';
    const year = '2021';
    const dataset = 'acs/acs5';
    const variables = 'B25031_004E,B25031_004M'; // B25031_004E for 2-bedroom rent, B25031_004M for its margin of error
    // const url = `https://www.huduser.gov/hudapi/public/fmr/listCounties/IN`; // 1808999999
    const url = `https://www.huduser.gov/hudapi/public/fmr/data/METRO16980MM2960`; 
    // const url = `https://www.huduser.gov/hudapi/public/fmr/listMetroAreas`; 
  
    try {
      const response = await axios.get(url, {
        headers:{
            Authorization: `Bearer ${apiKey}`
        }
      });
      const data = response.data;
    //   const garyArea = data.find(obj => obj.area_name === 'Gary, IN HUD Metro FMR Area');


      console.log(data)
      if(data?.data?.basicdata){
        const fmrData = data?.data?.basicdata
      const foundZip = fmrData.find(obj => obj.zip_code === '46368');

        console.log(foundZip)
      }
      
  
    //   console.log(`Estimated 2-bedroom rent for ZIP code ${zipCode}: $${estimatedRent}, Margin of Error: $${marginOfError}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
}

testFMR()