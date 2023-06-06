import { exampleRouter } from './routers/example/example';
import { locationRouter } from './routers/locations/location';
import { usersRouter } from './routers/users/users';
import { createTRPCRouter } from './trpc';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	example: exampleRouter,
	users: usersRouter,
	locations: locationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
