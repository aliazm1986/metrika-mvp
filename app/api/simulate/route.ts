import { NextResponse } from "next/server";
import { z } from "zod";
const schema=z.object({budget:z.number().positive(),unitPrice:z.number().positive()});
export async function POST(req:Request){const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:"ورودی نامعتبر است"},{status:400});const {budget,unitPrice}=parsed.data;const units=budget/unitPrice;return NextResponse.json({demo:true,budget,unitPrice,units,exposure:units*0.00002,fee:budget*.005,disclaimer:"Illustrative demo calculation; not financial advice."})}
