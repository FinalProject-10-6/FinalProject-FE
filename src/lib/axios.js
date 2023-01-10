import axios from "axios";

// 기본 URL
const instance = axios.create({
  baseURL: " https://sparta-sjl.shop/api", //상정님

  header: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// baseURL
export const baseURL = axios.create({
  baseURL: " https://sparta-sjl.shop/api",

  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");

  config.headers["Authorization"] = `${token}`;
  return config;
});

// apis
export const apis = {
  // 로그인 관련
  postLogin: (login) => instance.post("/user/login", login),
  postSignup: (signup) => instance.post("/user/signup", signup),
  checkUserName: (loginId) => instance.post(`/user/idCheck/${loginId}`),
  checkNickName: (nickname) => instance.post(`/user/nickCheck/${nickname}`),
  checkPw: (password) => instance.post(`/user/pwCheck/${password}`),
  postLogout: () => instance.get("/user/logout"),
  checkEmail: (email) => instance.post("/user/emailCheck/", email),
  checkemailCode: (emailCode) => instance.post("/user/emailCode/", emailCode),
  // 게시글 관련
  getPost: () => baseURL.get("/post/postlist"),
  getIdPost: (id) => {
    return baseURL.get(`/post/${id}`);
  },

  createPost: (post) => {
    console.log("payload::", post);
    baseURL.post("/post/create", post, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  deletePost: (id) => baseURL.delete(`/post/${id}`),
  editPost: (id, post) =>
    // console.log("string", id, post);
    baseURL.put(`/post/${id}`, post, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  //마이페이지수정
  patchPost: (patch) => {
    console.log("patch::", patch);
    baseURL.patch("/posts", patch, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  // 리뷰 관련

  // 좋아요 관련
};
