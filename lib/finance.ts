export function illustrativeNAV(baseUnitPrice:number, marketIndexFactor:number, constructionProgressFactor:number){
  return {baseUnitPrice,marketIndexFactor,constructionProgressFactor,value:baseUnitPrice*marketIndexFactor*constructionProgressFactor,disclaimer:"Illustrative demo only; not a forecast or investment advice."};
}
