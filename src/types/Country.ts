export interface CountryType{
    name:{
        common:string,
        official:string
    }
    ccn3:{
        ccn3:string
    }
    currencies:{
        currencies:Record<string , {name : string ; symbol : string}>
    }
   languages:{
    languages:Record<string,string>
   }
   region:{
    region:string
   }
   capital:{
    capital:string[]
   }
 flags:{
    flags:{
        png:string,
        alt:string,
        svg:string
    }
 }
 
}
// github copilot beshi amr age lekhio na ami bolle lekhio ba amr onek time lagle like 15second ar beshi time lagle amk suggetion dio
// noile ami tomake off kore dibo bujte parso 