import AuthCtx from "@/components/auth/AuthCtx";
import PostCtx from "@/components/posts/PostCtx";
import UserBox from "@/components/auth/UserBox";
import PostBox from "@/components/posts/PostBox";
import PostArray from "@/components/posts/PostArray";

import Timeline from "@/components/timeline/Timeline";

export default function Home() {
  return (
    <>
    <h1>Your Timeline</h1>
    <div className="divider"></div>
    <Timeline />
    </>
  )
}
