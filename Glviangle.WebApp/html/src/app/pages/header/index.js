import "./index.scss";
import { endpoint } from "../../../endpoint";
import config from "../../../config";
import $ from "jquery";
import { http } from "../../core/FormModule/HttpRequest";

export class Header{
  constructor(){
    this.data = {
      template: $.templates('#templateHeader'),
      container: $('#header .container-right-listmenu ul')
    };
  }
  
  async _init(){
    await this._data();
  }

  handleEvents(){

  }

  async _data(){
    const result = await http({
      url: `${config.SUBMIT_API}${endpoint.Category.GetAllCategory}`
    });

    this._render(result);
  }

  _render(data){
    const container = this.data.container;
    data.data.forEach((item) => {
      container.index = container.find('[item-number]').length++;
      const template = this.data.template.render(item);
      $(template).
        appendTo(container);
    });

   
  }
}