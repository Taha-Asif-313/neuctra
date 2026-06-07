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
export const getAllSparks = async (params = {}) => {
  try {
    const response = await authix.getAppUsersData({
      category: "spark",
      limit: params.limit || 10,
      cursor: params.cursor || null,
    });

    return response;
  } catch (error) {
    console.error("Get Sparks Error:", error);
    console.log(error);
  }
};

/* =========================================================
   GET SEARCH SPARKS
========================================================= */
export const getSearchSparks = async (query) => {
  try {
    const response = await authix.searchAllUsersDataByKeys({
      dataCategory: "spark",
      query,
    });

    return response;
  } catch (error) {
    console.error("Get Sparks Error:", error);
    console.log(error);
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
/* =========================================================
   GET SPARKS BY USER
========================================================= */
export const getUserSparks = async (userId) => {
  try {
    const response = await authix.getUserData({
      userId,
      category: "spark", // 🔥 because backend uses `type`
    });

    return response;
  } catch (error) {
    console.error("Get User Sparks Error:", error);
  }
};

/* =========================================================
   UPDATE SPARK
========================================================= */
export const updateSpark = async ({ dataId, userId, updatedSpark }) => {
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

/* =========================================================
   TOGGLE LIKE (Add or Remove)
========================================================= */
export const toggleLike = async ({ spark, likedBuyUserId }) => {
  try {
    // Check if user already liked this spark
    const hasLiked = spark.likes?.includes(likedBuyUserId);
    
    let updatedLikes;
    
    if (hasLiked) {
      // Remove like (unlike)
      updatedLikes = spark.likes.filter(id => id !== likedBuyUserId);
    } else {
      // Add like
      updatedLikes = [...(spark.likes || []), likedBuyUserId];
    }
    
    const updatedSpark = {
      ...spark,
      likes: updatedLikes,
    };

    const response = await authix.updateUserData({
      userId: spark.authorId, // Update the spark owner's data
      dataId: spark.id,
      data: updatedSpark,
    });

    return {
      success: true,
      data: response,
      action: hasLiked ? 'unliked' : 'liked', // Useful for UI feedback
    };
  } catch (error) {
    console.error("Toggle Like Error:", error);

    return {
      success: false,
      error,
    };
  }
};

/* =========================================================
   ADD COMMENT
========================================================= */
export const addCommentToSpark = async ({ spark, user, comment }) => {
  try {
    const trimmedComment = comment?.trim();

    if (!trimmedComment) {
      return {
        success: false,
        error: "Comment is required",
      };
    }

    const newComment = {
      id: crypto.randomUUID(),

      // User Info
      userId: user?.id,
      username: user?.username || "",
      name: user?.name || "",

      // Comment Info
      comment: trimmedComment,
      createdAt: new Date().toISOString(),
    };

    const updatedComments = [...(spark.comments || []), newComment];

    const updatedSpark = {
      ...spark,
      comments: updatedComments,
    };

    const response = await authix.updateUserData({
      userId: spark.authorId,
      dataId: spark.id,
      data: updatedSpark,
    });

    return {
      success: true,
      data: response,
      comment: newComment,
      comments: updatedComments,
    };
  } catch (error) {
    console.error("Add Comment Error:", error);

    return {
      success: false,
      error,
    };
  }
};
