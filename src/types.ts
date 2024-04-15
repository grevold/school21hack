import z from "zod";

export enum RoutePath {
  MainPage = "/",
  TableShulte = "/tableshulte",
  GraphTask = "/graphTask",
}

export const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
  }),
  images: z.array(z.string()),
});

export interface MinerData {
  model: string;
  startDate: string;
  endDate: string;
}

export interface ClientData {
  name: string;
  miners: MinerData[];
}

export const ProductsSchema = z.array(ProductSchema);

export type IProduct = z.infer<typeof ProductSchema>;

// http://localhost:3000/#/textinput
// http://localhost:3000/#/stopwatch
// http://localhost:3000/#/slider
// http://localhost:3000/#/usememo
// http://localhost:3000/#/usecallback
// http://localhost:3000/#/pads
// http://localhost:3000/#/reactmemo
// http://localhost:3000/#/usereducer
// http://localhost:3000/#/usecontext
// http://localhost:3000/#/catalog
