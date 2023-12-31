import { Carprops } from "@/types";
import { Filterprops } from "@/types";
export async function Dfetch(filters:Filterprops){
  const{manufactured,year,model,limit,fuel}=filters
    const headers={
      'X-RapidAPI-Key': 'e6d7607d6bmsh5910a0c853ea4edp189cfajsn28ba2c0b2752',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufactured}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
  
   const result= await response.json()
   return result

}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: Carprops, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 
export const UpdateParams=(type:string,value:string)=>{
  
  const search=new URLSearchParams(window.location.search)
  
    search.set(type, value)

  const newPathname=`${window.location.pathname}?${search.toString()}`

  return newPathname
}