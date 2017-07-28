/*
* @Auther: Greg Holdich
* @Description: To iniate the backend and its required node_modules listening on a separate protocol.
*/
const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'backend', shell: true };
require('child_process').spawn('npm', args, opts);