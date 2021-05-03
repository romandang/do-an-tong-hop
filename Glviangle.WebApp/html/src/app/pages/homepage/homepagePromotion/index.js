import "./index.scss";
import "../../../components/Promotion";
import $ from 'jquery';
import { endpoint } from "../../../../endpoint";
import config from "../../../../config";
import { http } from "../../../core/FormModule/HttpRequest";

export class HomepagePromotion{
  constructor(){
    this.data = {
      container: $('.block-promotion-container'),
      template: $.templates('#templateListPromotion'),
    };
  }

  async _init(){
    await this._getData();
  }

  handleEvents(){

  }

  async _getData(){
    const result = await http({
      url: `${config.SUBMIT_API}${endpoint.Promotion.GetAllPromotion}`,

    });

    this.render(result);
  }

  render(result){
    const self = this;
    const container = self.data.container;
    result.data.forEach((item) => {
      const template = self.data.template.render(item);
      $(template)
        .appendTo(container);
    });
  }
}