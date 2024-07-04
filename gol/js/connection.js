import values from "./values.js";
import logic from "./logic.js";

let connection = {

  connect() {
    axios
      .get("http://localhost:8080/users/1")
      .then((e) => {
        values.id = e.data.id
        values.name = e.data.name
        values.setCash(e.data.value);
      });
  },

  random(a) {
    axios.get("http://localhost:8080/random").then((e) => {
        if(e.data == 1){
          logic.goal_n(a)
          this.plus({ id: values.id, value: values.betvalue });
        }else{
          logic.nogoal_n(a);
          this.less({ id: values.id, value: values.betvalue });
        }
    })
  },

  less(obj){ axios({ method: "POST", url: "http://localhost:8080/less/", data: obj, }); },
  plus(obj){ axios({ method: "POST", url: "http://localhost:8080/plus/", data: obj, }); }

};

connection.connect();

export default connection;
