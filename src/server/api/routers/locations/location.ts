import { createTRPCRouter } from '../../trpc';
import { addLocationService } from './location.service';

export const locationRouter = createTRPCRouter({
	addLocation: addLocationService,
});
