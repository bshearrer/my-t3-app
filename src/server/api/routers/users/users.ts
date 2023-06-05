import { createTRPCRouter } from '../../trpc';
import { getAllUsersService } from './users.service';

export const usersRouter = createTRPCRouter({
	getAllUsers: getAllUsersService,
});
