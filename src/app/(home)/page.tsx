import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center items-center gap-5 ">
      <h1 className="font-bold text-3xl">Auth</h1>

      <LoginButton>
        <Button>Sign in</Button>
      </LoginButton>
    </main>
  );
}
