import { createTRPCRouter } from "../../trpc";
import { greetingService } from './example.services';

export const exampleRouter = createTRPCRouter({
	greeting: greetingService,
});
