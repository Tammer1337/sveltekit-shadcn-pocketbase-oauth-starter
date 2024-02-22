import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) return {};
	locals.user = await locals.pb.collection('users').getOne(locals.user.id);

	return {
		user: locals.user
	};
};
