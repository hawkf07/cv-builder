import { z } from "zod";
const skills = z.array(z.string());
type a = z.infer<typeof skills>;

export const contactInformationZodType = z.object({
  address: z.string(),
  email: z.string().email(),
  linkedin: z.string(),
  phoneNumber: z.string(),
  summary: z.string(),
  skills: z.record(z.string(), z.string()),
});

export type data = z.infer<typeof contactInformationZodType>;
