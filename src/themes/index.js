import { darkTheme as brandADark } from "./brandA/dark"; 
import { lightTheme as brandALight } from "./brandA/light"; 
import { darkTheme as brandBDark } from "./brandB/dark"; 
import { lightTheme as brandBLight } from "./brandB/light"; 
import { darkTheme as brandCDark } from "./brandC/dark"; 
import { lightTheme as brandCLight } from "./brandC/light"; 

let brand = "brandC";

const getDarkTheme = () => {
   if(brand === "brandA"){
      return brandADark;
   }else if(brand === "brandB"){
     return brandBDark;
   }else if(brand === "brandC"){
     return brandCDark;
   }
   return null;
}

const getLightTheme = () => {
  if(brand === "brandA"){
    return brandALight;
 }else if(brand === "brandB"){
   return brandBLight;
 }else if(brand === "brandC"){
   return brandCLight;
 }
 return null;
}

export const theme  = {
  darkTheme : getDarkTheme(),
  lightTheme : getLightTheme(),
}