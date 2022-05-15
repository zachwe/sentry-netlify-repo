import { useRouter } from "next/router";

export default function HelloWorld() {
  const router = useRouter();
  const { name } = router.query;
  return <div>Hello, {name}!</div>;
}
