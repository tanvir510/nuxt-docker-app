export default function( { $axios, req, store} ) {
	if ( process.browser ) {
		return
	}

	const token = store.$cookies.get('user_token')

	if ( token ) {
		$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	}

	// $axios.onResponse( () => {
	// 	$axios.setHeader('Access-Control-Allow-Origin', '*')
	// } )

}