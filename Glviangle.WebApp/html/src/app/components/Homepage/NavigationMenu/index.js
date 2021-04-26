import "./index.scss";
import { http } from "../../../core/FormModule/HttpRequest";
import { endpoint } from "../../../../endpoint";
import $ from "jquery";

$(document).ready(async function(){
  const data = await http({
    http: endpoint.Category.GetAllCategory,
  });
  console.log(data);
});