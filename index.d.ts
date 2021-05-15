/**
 * quick-mariadb definitions
 */
declare module 'quick-mariadb' {
	function get(options: Object, table: string, key: string): Object;
	
	function set(options: Object, table: string, key: string, value: any): Object;
	export {
		get,
		set
	}
}
