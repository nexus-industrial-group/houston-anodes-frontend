export const downloadFile = (
  e?: React.MouseEvent,
  _docTitle?: string,
  fileName?: string
): void => {
  e?.preventDefault();
  if (!fileName || typeof window === "undefined") return;

  const link = document.createElement("a");
  link.href = `/downloadables/${fileName}`;
  link.download = fileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
};
