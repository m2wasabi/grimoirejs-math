import gr from "grimoirejs";
import Attribute from "grimoirejs/ref/Node/Attribute";
import Quaternion from "../Quaternion";
function Rotation3Converter(this: Attribute, val: any): any {
    if (val instanceof Quaternion) {
        return val;
    } else if (Array.isArray(val)) {
        return new Quaternion([val[0], val[1], val[2], val[3]]);
    } else if(!!val && val[0] !== void 0 && val[1] !== void 0 && val[2] !== void 0 && val[3] !== void 0){
      return new Quaternion([val[0],val[1],val[2],val[3]]);
    }else if(!!val && val.X !== void 0 && val.Y !== void 0 && val.Z !== void 0 && val.W !== void 0){
      return new Quaternion([val.X,val.Y,val.Z,val.W]);
    } else if (typeof val === "string") {
        return Quaternion.parse(val);
    }
}

export default Rotation3Converter;
