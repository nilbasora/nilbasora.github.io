import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (subfolder: string): PostMetadata[] => {
  const path = require("path");
  const folder = path.join(process.cwd(), `app/posts/${subfolder}/`);
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const path = require("path");
    const file = path.join(process.cwd(), `app/posts/${subfolder}/${fileName}`);
    const fileContents = fs.readFileSync(file, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: `${subfolder}/${fileName.replace(".md", "")}`,
    };
  });

  return posts;
};

export default getPostMetadata;
