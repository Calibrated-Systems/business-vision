import { Title } from "@solidjs/meta";
import { createMemo } from "solid-js";

export default function PageTitle(props: any) {
  const titleText = createMemo(() => `${props.children} | Creator Brand Journey`);

  return <Title>{titleText()}</Title>;
}