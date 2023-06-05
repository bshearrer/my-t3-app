import { getAuth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { prisma } from '../db';
import { getUserRole } from './helpers/getUserRole';
import { UserRoles } from 'src/types/types';

export const createTRPCContext = (opts: CreateNextContextOptions) => {
	const session = getAuth(opts.req);
	const { userId } = session;

	/*
	 *  -- HOW TO SETUP ROLES IN CLERK --
	 * 1. Go to the Clerk dashboard, and select your application
	 * 2. Click on "Users" in the left sidebar, select a user, and add { "role": <role_name> } to the "Public Metadata" field
	 * 3. Click on Sessions in the left sidebar underneath Configure
	 * 4. Click the Edit button next to "Customize Session Token", and add { "publicMetadata": "{{user.public_metadata}}" }
	 * 5. Click Save, and you are finished.
	 */
	const role = getUserRole(session);
	// sessionClaims && sessionClaims.publicMetadata
	// 	? (sessionClaims.publicMetadata as { role: string | null | undefined })
	// 	: { role: null };

	return {
		prisma,
		clerk: {
			userId,
			role,
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

const isLoggedIn = t.middleware(({ next, ctx }) => {
	if (!ctx.clerk.userId) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next();
});

const isAdminRole = t.middleware(({ next, ctx }) => {
	const role = ctx.clerk.role;
	if (!role || role !== UserRoles.ADMIN) {
		throw new TRPCError({ code: 'UNAUTHORIZED' });
	}
	return next();
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isLoggedIn);
export const adminProcedure = t.procedure.use(isLoggedIn).use(isAdminRole);
