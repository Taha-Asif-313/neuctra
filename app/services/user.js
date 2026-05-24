import { authix } from "../utils/neuctraAuthix";

export const getAllUsers = async () => {
    try {
        const users = await authix.getAllAppUsers();   

        console.log(users);
        
        return users
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