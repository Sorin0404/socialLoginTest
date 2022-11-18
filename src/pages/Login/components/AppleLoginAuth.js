// key, URI, URL 모두 다  수정 필요

// export const REST_API_KEY = "4418a095b805bc5f8a23a349ac793641";
export const APPLE_CLIENT_ID = "com.herokuapp.applelogintest";
export const REDIRECT_URI = "https://applelogint.herokuapp.com/auth/apple";
export const APPLE_AUTH_URL = `https://appleid.apple.com/auth/authorize?response_type=code&client_id=${APPLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=apple&response_mode=form_post&scope=name`;
