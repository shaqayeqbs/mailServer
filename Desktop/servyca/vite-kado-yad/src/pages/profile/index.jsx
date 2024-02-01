import { useQuery } from "react-query";
import BackButton from "../../@core/utils/back-button";
import { Link } from "react-router-dom";
import { Pencil } from "react-bootstrap-icons";
import Avatar from "react-avatar";
import { getProfile } from "../../@core/api/profile";
import ProfileItems from "../../components/profile/profile-items";
import Skeleton from "react-loading-skeleton";

function Profile() {
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery("profile", getProfile);

  console.log(profileData);
  if (isLoading) {
    // Loading state with skeletons
    return (
      <div className="p-5 container">
        <BackButton />

        <ProfileItems />
      </div>
    );
  }

  if (isError) {
    // Error state
    return <p>Error fetching profile data: {isError.message}</p>;
  }

  const { name, mobile_number, profile_picture } = profileData;

  return (
    <div className="p-5 container">
      <div className="my-2 mb-7">
        <BackButton title="منوی کاربری" />
      </div>

      <ProfileItems />
    </div>
  );
}

export default Profile;
