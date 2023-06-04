import { type UserResource } from '@clerk/types';

export const checkUserRole = (user: UserResource | null | undefined, role: string): boolean => {
	if (!user || !user.publicMetadata || !user.publicMetadata.role) {
		return false;
	}
	return user.publicMetadata.role.includes(role);
};
