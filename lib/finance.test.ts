import { describe, expect, it } from "vitest";
import { illustrativeNAV } from "./finance";
describe("illustrativeNAV",()=>{it("returns transparent demo inputs and value",()=>{const r=illustrativeNAV(100,1.1,.8);expect(r.value).toBeCloseTo(88,10);expect(r.disclaimer).toContain("Illustrative");});});
