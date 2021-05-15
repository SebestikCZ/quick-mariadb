/**
 * quick-mariadb definitions
 */
declare module 'quick-mariadb' {
	function get(options: Object, table: string, key: string): Object;
	
	function set(options: Object, table: string, key: string, value: Object): Object;
	export {
		get,
		set
	}
}
