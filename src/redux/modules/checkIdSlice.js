import { apis } from "../../lib/axios";

// id 중복체크
const __idcheck = async (loginId) => {
  try {
    const data = await apis.checkUserName(loginId);
    console.log("loginId:::", loginId);
    console.log("data: ", data);
    if (data.data.statusCode === 200) {
      alert(data.data.msg);
    }
    // useSweet(1000, "success", "회원가입 성공");
    return data;
  } catch (error) {
    alert(error.response.data.msg);
    // useSweet(1000, "error", error.response.data.msg);
  }
};

export default __idcheck;
