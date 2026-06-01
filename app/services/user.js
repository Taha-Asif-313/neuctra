import { authix } from "../utils/neuctraAuthix";

export const getAllUsers = async () => {
  try {
    const users = await authix.getAllAppUsers();

    console.log(users);

    return users;
  } catch (error) {
    console.error("Get Users Error:", error);
    return {
      success: false,
      error,
    };
  }
};

export const getUserById = async (userId) => {
  try {
    const user = await authix.getUser({ id: userId });
    return user;
  } catch (error) {
    console.error("Get User Error:", error);
    return {
      success: false,
      error,
    };
  }
};

export const getUserByUsername = async (username) => {
  try {
    const user = await authix.getUser({ username });
    return user;
  } catch (error) {
    console.error("Get User Error:", error);
    return {
      success: false,
      error,
    };
  }
};

export const updateUserName = async (userId, username) => {
  try {
    const response = await authix.updateUser({
      userId,
      username,
    });

    return response;
  } catch (error) {
    console.error("Update Username Error:", error);

    return {
      success: false,
      error,
    };
  }
};

export const updateUserAvatar = async (userId, avatarUrl) => {
  try {
    const response = await authix.updateUser({
      userId,
      avatarUrl,
    });

    return response;
  } catch (error) {
    console.error("Update Avatar Error:", error);

    return {
      success: false,
      error,
    };
  }
};
