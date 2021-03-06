import gr from "grimoirejs";
import Attribute from "grimoirejs/ref/Node/Attribute";
import Vector3 from "../Vector3";

function Vector3Converter(this: Attribute, val: any): any {
  if (val instanceof Vector3) {
    return val;
  } else if (typeof val === "string") {
    return Vector3.parse(val); // TODO: to do not throws execptions.
  } else if (typeof val == "number") {
    return new Vector3(val, val, val);
  } else if (Array.isArray(val)) {
    return new Vector3(val[0], val[1], val[2]);
  } else if(val[0] !== void 0 && val[1] !== void 0 && val[2] !== void 0){
    return new Vector3(val[0], val[1], val[2]);
  } else if(val.X !== void 0 && val.Y !== void 0 && val.Z !== void 0){
    return new Vector3(val.X,val.Y,val.Z);
  }
}

export default Vector3Converter;
