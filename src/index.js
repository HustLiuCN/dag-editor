/*
 *	DAG-Editor @liupd
 */

import Editor from './base'
import shapes from './shape'

const MyEditor = new Editor({
	// toolbar: '#toolbar'
})
for (let s in shapes) {
	MyEditor._register(s, shapes[s])
}

console.log(MyEditor)

