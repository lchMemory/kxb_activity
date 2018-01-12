
/*
*代码分割
*/
export default (url)=>{
	return () => import(`./components/{url}.vue`)
}