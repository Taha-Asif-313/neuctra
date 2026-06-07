import { authix } from "../utils/neuctraAuthix";

/* =========================================================
   CREATE COMMENT
========================================================= */
export const createComment = async ({
  userId,
  sparkId,
  username,
  name,
  avatar,
  comment,
}) => {
  try {
    const response = await authix.addUserData({
      userId,
      dataCategory: "comment",
      data: {
        sparkId,
        userId,
        username,
        name,
        avatar,
        comment,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      },
    });

    return response;
  } catch (error) {
    console.error("Create Comment Error:", error);
    throw error;
  }
};

/* =========================================================
   GET COMMENTS BY SPARK
========================================================= */
export const getSparkComments = async (sparkId) => {
  try {
    const response = await authix.searchAllUsersDataByKeys({
      dataCategory: "comment",
      sparkId,
    });

    return response;
  } catch (error) {
    console.error("Get Spark Comments Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   DELETE COMMENT
========================================================= */
export const deleteComment = async (userId, dataId) => {
  try {
    await authix.deleteUserData({
      userId,
      dataId,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Delete Comment Error:", error);

    return {
      success: false,
      error,
    };
  }
};
