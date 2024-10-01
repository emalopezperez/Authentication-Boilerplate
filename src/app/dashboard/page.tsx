import ButtonLogout from "@/components/auth/ButtonLogout";

export default function LogoutButton() {
  return (
    <main className="w-full">
      <header className="w-full flex justify-center items-center h-5">
        <h2>Dashboard</h2>
      </header>
      <ButtonLogout />
    </main>
  );
}
