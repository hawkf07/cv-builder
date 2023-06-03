import { z } from "zod";

export const contactInformationZodType = z.object({
  address: z.string(),
  email: z.string().email(),
  linkedin: z.string(),
  phoneNumber: z.string(),
  summary: z.string(),
});

export type contactInformation = z.infer<typeof contactInformationZodType>;
