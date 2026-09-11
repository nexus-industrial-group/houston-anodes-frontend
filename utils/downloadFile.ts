export const downloadFile = (e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, docTitle?: string, fileName?: string): void => {
    e?.preventDefault();
    const target = fileName ? `/downloadables/${fileName}` : undefined;
    if (target && typeof window !== "undefined") {
        window.open(target, "_blank", "noopener,noreferrer");
    }
};
