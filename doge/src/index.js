import input from '../component/input'
import button from '../component/button'
let components = {
    input,
    button
}
class Doge {
    constructor(){

    }
    static install(Vue){
        Object.keys(components).forEach(c=>{
            Vue.component(`d-${c}`, components[c]);
        })
    }
}
export default Doge