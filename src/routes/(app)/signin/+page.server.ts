import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const providers = await locals.pb.collection('users').listAuthMethods();
	return { providers };
};
