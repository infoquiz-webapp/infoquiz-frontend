const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiUrls = {
  auth: {
    signIn: BASE_URL + "/api/auth/token",
  },
};
