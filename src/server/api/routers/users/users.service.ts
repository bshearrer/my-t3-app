import { clerkClient } from '@clerk/nextjs';
import { adminProcedure } from '../../trpc';

export const getAllUsersService = adminProcedure.query(async ({}) => {
	return await clerkClient.users.getUserList();
});
