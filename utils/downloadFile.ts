export const downloadFile = (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, docTitle?: string, fileName?: string): void => {
    e?.preventDefault();
    const target = fileName ? `/downloadables/${fileName}` : undefined;
    const displayName = docTitle || "this document"
    alert(
      `Thank you — the download for ${displayName} will start shortly.`,
    );
    if (target && typeof window !== "undefined") {
      window.open(target, "_blank", "noopener,noreferrer");
    }
  };