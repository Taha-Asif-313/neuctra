import { authix } from "../utils/neuctraAuthix";

/* =========================================================
   CREATE SPARK
========================================================= */
export const createSpark = async (userId, spark) => {
  try {
    const response = await authix.addUserData({
      userId,
      dataCategory: "spark",
      data: spark,
    });

    return response;
  } catch (error) {
    console.error("Create Spark Error:", error);
    throw error;
  }
};

/* =========================================================
   GET ALL SPARKS
========================================================= */
export const getAllSparks = async () => {
  try {
    const sparks = await authix.getAppUsersData("spark");

    return sparks
  } catch (error) {
    console.error("Get Sparks Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   GET SINGLE SPARK
========================================================= */
export const getSingleSpark = async (userId, dataId) => {
  try {
    const spark = await authix.getSingleUserData({
      userId,
      dataId,
    });

    return spark;
  } catch (error) {
    console.error("Get Single Spark Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   GET SPARKS BY USER
========================================================= */
export const getUserSparks = async (userId) => {
  try {
    const sparks = await authix.getUserData({
      userId,
      category: "spark",
    });

  return sparks || [];
  } catch (error) {
    console.error("Get User Sparks Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   UPDATE SPARK
========================================================= */
export const updateSpark = async ({
  dataId,
  userId,
  updatedSpark,
}) => {
  try {
    const response = await authix.updateUserData({
      userId,
      dataId,
      data: updatedSpark,
    });

    return {
      success: true,
      data: response,
    };
  } catch (error) {
    console.error("Update Spark Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   DELETE SPARK
========================================================= */
export const deleteSpark = async (userId, dataId) => {
  try {
    await authix.deleteUserData({
      userId,
      dataId,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Delete Spark Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   SEARCH SPARKS
========================================================= */
export const searchSparks = async (query) => {
  try {
    const sparks = await authix.searchAppDataByKeys({
      category: "spark",
      q: query,
    });

    return {
      success: true,
      data: sparks || [],
    };
  } catch (error) {
    console.error("Search Sparks Error:", error);

    return {
      success: false,
      error,
    };
  }
};