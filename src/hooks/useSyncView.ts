import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

type Args = {
  hash: string;
  intersectionOptions?: IntersectionOptions;
};

function useSyncView({ hash, intersectionOptions }: Args) {
  const { ref, inView } = useInView({
    threshold: intersectionOptions?.threshold ?? 0.75,
    ...(intersectionOptions ?? {}),
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection(hash);
    }
  }, [inView, setActiveSection]);

  return { ref };
}

export default useSyncView;
