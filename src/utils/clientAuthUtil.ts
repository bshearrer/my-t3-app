import { type UserResource } from '@clerk/types';

export const checkUserRole = (user: UserResource, role: string): boolean => {
	if (!user.publicMetadata || !user.publicMetadata.role) {
		return false;
	}
	return user.publicMetadata.role.includes(role);
};
