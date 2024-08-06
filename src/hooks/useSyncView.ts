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
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(hash);
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return { ref };
}

export default useSyncView;
