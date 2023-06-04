import { getAuth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { prisma } from '../db';

export const createTRPCContext = (opts: CreateNextContextOptions) => {
	const userId = getAuth(opts.req).userId;

	return {
		prisma,
		clerk: {
			userId,
		},
	};
};

const t = initTRPC.context<typeof createTRPCContext>().create({
	transformer: superjson,
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
			},
		};
	},
});

const isAuthed = t.middleware(({ next, ctx }) => {
	if (!ctx.clerk.userId) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next();
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
