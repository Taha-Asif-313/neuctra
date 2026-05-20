import crypto from "crypto";

const generateId = () => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // fallback for older environments
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const createBlock = (type) => {
  switch (type) {
    case "text":
      return {
        id: generateId(),
        type: "text",
        content: "",
      };

    case "heading":
      return {
        id: generateId(),
        type: "heading",
        content: "",
        level: "h1",
      };

    case "image":
      return {
        id: generateId(),
        type: "image",
        url: "",
        caption: "",
        width: "100%",
        height: 400,
        radius: 24,
        opacity: 1,
        objectFit: "cover",
      };

    case "code":
      return {
        id: generateId(),
        type: "code",
        language: "javascript",
        content: "",
      };

    case "table":
      return {
        id: generateId(),
        type: "table",
        headers: ["Column 1", "Column 2"],
        rows: [
          ["", ""],
          ["", ""],
        ],
      };

    default:
      return null;
  }
};
