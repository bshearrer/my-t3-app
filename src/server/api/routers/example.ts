import { createTRPCRouter, publicProcedure } from 'y/server/api/trpc';
import { z } from 'zod';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(({ input, ctx }) => {
			const greeting = ctx.clerk.userId
				? `hello! ${ctx.clerk.userId}`
				: `hello! ${input.text}`;
			return {
				greeting,
			};
		}),
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.locations.findMany({});
	}),
});
