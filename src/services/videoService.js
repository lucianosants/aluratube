import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = 'https://xaodgcrzqsxpckwgluqm.supabase.co';
const PUBLIC_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhhb2RnY3J6cXN4cGNrd2dsdXFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNjU2MTksImV4cCI6MTk4Mzc0MTYxOX0.BdEtxd92pxWJ77KRo3VoaIla8ywN3vxyTUoRDPewS2M';

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export default function videoService() {
	const getAllVideos = () => {
		return supabase.from('videos').select('*');
	};

	return {
		getAllVideos,
	};
}
