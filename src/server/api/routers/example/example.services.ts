import { clerkClient } from '@clerk/nextjs';
import { z } from 'zod';
import { adminProcedure } from '../../trpc';

export const greetingService = adminProcedure.input(z.object({ text: z.string() })).query(async ({ input, ctx }) => {
	const clerkData = ctx.clerk.userId ? await clerkClient.users.getUser(ctx.clerk.userId) : null;

	const greeting = ctx.clerk.userId
		? `Hello, ${clerkData?.firstName ? clerkData.firstName : input.text}`
		: `Hello, ${input.text}`;
	return {
		greeting,
	};
});
