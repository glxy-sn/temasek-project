import axios from "axios";

const baseService = () => {
  // const cookies = new Cookies();
  const accessToken = sessionStorage.getItem("authToken");
  //console.log('ini base access', accessToken)

  const getModule = async (setModule) => {
    try {
      const data = await axios
        .get(`${process.env.REACT_APP_API}/app/module`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log("modul", res)
          setModule(res.data.content);
        });

      return data;
    } catch (err) {
      console.error(err.message);
    }
  };

  const getMenu = async (id, setMenu) => {
    try {
      const data = await axios
        .get(`${process.env.REACT_APP_API}/app/menu/tree/${id}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setMenu(res.data.content);
        });

      return data;
    } catch (err) {
      console.error(err.message);
    }
  };

  return {
    getModule,
    getMenu,
  };
};

export default baseService;
