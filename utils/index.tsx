
export async function Dfetch(){
    const headers={
        'X-RapidAPI-Key': 'e6d7607d6bmsh5910a0c853ea4edp189cfajsn28ba2c0b2752',
		'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'

    }
    const url = 'https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=Kawasaki&model=Ninja';
   const response= await fetch(url,{
    headers:headers
   })
   const result= await response.json()
   return result

}
export const calculateCarRent = (displacement: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const displacementFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on displacement and age
    const displacementRate = displacement* displacementFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + displacementRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  