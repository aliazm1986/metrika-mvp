import { PrismaClient } from "@prisma/client";
import { projects } from "../lib/data";
const prisma = new PrismaClient();
async function main(){for(const p of projects){const risk=p.risk==="low"?"LOW":p.risk==="high"?"HIGH":"MEDIUM";await prisma.project.upsert({where:{slug:p.slug},update:{},create:{slug:p.slug,name:p.name,code:p.code,city:p.city,type:p.type,stage:p.stage,funding:p.funding,unitPrice:p.unitPrice,minInvestment:p.min,completion:p.completion,area:p.area,description:p.description,risk}})}}
main().finally(()=>prisma.$disconnect());
