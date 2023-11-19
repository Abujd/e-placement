import Button from "@mui/material/Button";
import "../styles/globals.scss";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center gap-[20px] mt-[150px]">
        <Button variant="contained" href="/sign-in">
          Sign In
        </Button>
        <Button variant="contained" href="/sign-up">
          Sign Up
        </Button>
      </div>
    </>
  );
}
