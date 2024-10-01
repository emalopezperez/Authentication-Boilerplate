import { auth } from "@/auth";

const AdminPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    return <div>You are not admin</div>;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
export default AdminPage;
