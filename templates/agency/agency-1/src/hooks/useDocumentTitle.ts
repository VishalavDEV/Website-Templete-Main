import { useEffect } from "react";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const fullTitle = title.endsWith("AxiomLab")
      ? title
      : `${title} \u2014 AxiomLab`;
    document.title = fullTitle;
    return () => {
      document.title = "AxiomLab \u2014 Design & Technology Studio";
    };
  }, [title]);
}
