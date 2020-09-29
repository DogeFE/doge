import Input from '../component/input'
import Button from '../component/button/index'
import Switch from '../component/switch/index'
let components = [
  Input,
  Button,
  Switch,
];
class Doge {
    constructor(){

    }
    static install(Vue){
        components.forEach((component) => {
            Vue.component(component.name, component);
        });
    }
}
export default Doge