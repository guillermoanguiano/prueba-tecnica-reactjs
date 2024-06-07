import { useStore } from "../context/store";

export default function Home() {
  const user = useStore((state) => state.user);

  console.log({ user });
  return (
    <div>Hello world</div>
  )
}
