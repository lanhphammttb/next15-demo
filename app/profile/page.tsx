import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfo from "@/components/profile/ProfileInfo";
import SocialLinks from "@/components/profile/SocialLinks";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <section className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
        <ProfileHeader />
        <div className="pt-20 pb-10 text-center px-6">
          <ProfileInfo />
          <SocialLinks />
        </div>
      </section>
    </main>
  );
}
