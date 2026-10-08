import { use, useState } from "react";
import type { CountryType } from "../types/Country";
import Country from "../country/country";




 const countriesPromise=async () :Promise<CountryType[]>=>{
 let res=await fetch("https://openapi.programming-hero.com/api/all")
 let pakaData = await res.json()
 return pakaData.countries;
 }
const CountryPromisecolled= countriesPromise()


 export default function Countries( ) {
const countries= use(CountryPromisecolled)

console.log(countries);
const [visitedCountries,setVisitedCountries]=useState<CountryType[]>([])
const [visitedFlags,setVisitedFlags] = useState<string[]>([])

 const handleVisitedCountries=(country:CountryType):void=>{
  setVisitedCountries(prev=>prev.some(Khalibox=>Khalibox.ccn3?.ccn3===country.ccn3?.ccn3)?prev.filter(khalibox=>khalibox.ccn3?.ccn3!==country.ccn3?.ccn3):[...prev,country])
 }
 const handleVisitedFlags=(flag:string):void=>{
    setVisitedFlags(prev=>prev.includes(flag)?prev.filter(khalibox=>khalibox !==flag):[...prev,flag])
 }




    return (
        <>
         <div className="">
            <h3>Total Countries:{countries?.length}</h3>
            <h4>Visited Countries:{visitedCountries?.length}</h4>
            <h4>Visited countries Flags :{visitedFlags?.length}</h4>
            <div className="" style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"20px"}}>
         {
            visitedFlags.map((flag,index)=>(
                <img key={index} src={flag} alt="visited Country flag" width={"60"}></img>
            ))
         }
            </div>
            <div className="" style={{display:"grid",gridTemplateColumns:"repeat(3 , 1fr)",gap:"20px"}}>
                {
                    countries.map((country)=>(
                        <Country key={country.ccn3?.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} />
                    ))
                }
            </div>
         </div>

        </>
    )
 }