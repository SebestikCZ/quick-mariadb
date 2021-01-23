/**
 * quick-mariadb definitions
 */
declare module 'quick-mariadb' {
	function get(options: Object, table: string, key: string): any;
	
	function set(options: Object, table: string, key: string, value: any): any;
	export {
		get,
		set
	}
}
