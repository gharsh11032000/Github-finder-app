import axios from "axios";
import { REACT_APP_GITHUB_TOKEN } from "../../../config";
import { REACT_APP_GITHUB_URL } from "../../../config";

const github = axios.create({
  baseURL: REACT_APP_GITHUB_URL,
  headers: {
    Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  try {
    const params = new URLSearchParams({
      q: text,
    });

    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
  } catch (error) {
    window.location = "/notfound";
    console.log(error);
  }
};

export const getUserAndUserRepos = async (login) => {
  try {
    const [user, repos] = await Promise.all([
      github.get(`/users/${login}`),
      github.get(`/users/${login}/repos`),
    ]);

    return { user: user.data, repos: repos.data };
  } catch (error) {
    window.location = "/notfound";
    console.log(error);
  }
};
