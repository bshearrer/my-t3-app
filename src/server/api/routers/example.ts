import { clerkClient } from '@clerk/nextjs';
import { createTRPCRouter, publicProcedure } from 'y/server/api/trpc';
import { z } from 'zod';

export const exampleRouter = createTRPCRouter({
	hello: publicProcedure
		.input(z.object({ text: z.string() }))
		.query(async ({ input, ctx }) => {
			const clerkData = ctx.clerk.userId
				? await clerkClient.users.getUser(ctx.clerk.userId)
				: null;

			const greeting = ctx.clerk.userId
				? `hello! ${
						clerkData?.firstName ? clerkData.firstName : input.text
				  }`
				: `hello! ${input.text}`;
			return {
				greeting,
			};
		}),
});
