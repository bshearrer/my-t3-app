import { type UserResource } from '@clerk/types';

declare global {
	interface UserPublicMetadata {
		[k: string]: unknown;
		role?: string | string[]; 
	}
}

export const checkUserRole = (user: UserResource | null | undefined, role: string): boolean => {
	if (!user || !user.publicMetadata || !user.publicMetadata.role) {
		return false;
	}
	return user.publicMetadata.role.includes(role);
};
