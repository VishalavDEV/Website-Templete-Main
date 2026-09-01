import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const fullTitle = title.endsWith("Foldline")
      ? title
      : `${title} \u2014 Foldline`;
    document.title = fullTitle;
    return () => {
      document.title = "Foldline \u2014 Design & Technology Studio";
    };
  }, [title]);
}
