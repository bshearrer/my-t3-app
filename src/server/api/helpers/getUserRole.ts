import { type SignedInAuthObject, type SignedOutAuthObject } from '@clerk/nextjs/dist/types/server';

export const getUserRole = (session: SignedInAuthObject | SignedOutAuthObject): string | null => {
	const { sessionClaims } = session;

	if (!sessionClaims || !sessionClaims.publicMetadata) {
		return null;
	}

	const { role } = sessionClaims.publicMetadata as { role: string | null | undefined };
	return role ? role : null;
};
