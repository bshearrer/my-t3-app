import { z } from 'zod';
import { adminProcedure } from '../../trpc';

export const addLocationService = adminProcedure.input(z.string()).mutation(async ({ input, ctx }) => {
	return await ctx.prisma.locations.create({
		data: {
			address: input,
		},
	});
});
