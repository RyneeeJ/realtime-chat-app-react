import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `ReactTalks | ${title}`;
  }, [title]);
}
