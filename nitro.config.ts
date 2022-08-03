import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
	plugins: [ '~/plugins/test.ts' ],
	/*externals: {
		traceInclude: [
        	'./node_modules/etcd3/proto/kv.proto',
        	'./node_modules/etcd3/proto/auth.proto'
    	]
	}*/
})
