import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const ProfessionalPage = () => {
  const postMetadata = getPostMetadata("professional");
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      {postPreviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
      ) : (
        <div className="text-center mt-10 text-2xl"><p>No post found.</p></div>
      )}
    </div>
  );
};

export default ProfessionalPage;