import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      const width = Math.min(window.innerWidth - 32, 800);
      setContainerWidth(width);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    // Delay showing content to ensure PDF is fully rendered and avoid flicker
    setTimeout(() => setIsReady(true), 400);
  }

  return (
    <>
      {!isReady && <PDFSkeleton />}
      <div style={{ display: isReady ? 'block' : 'none' }}>
        <Document
          file="/chintu-mohandas-2026.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={null}
          error={<div className="resume-error">Failed to load resume.</div>}
        >
          {numPages &&
            Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth}
                className="resume-pdf-page"
              />
            ))}
        </Document>
      </div>
    </>
  );
}

export function PDFSkeleton() {
  return (
    <div className="pdf-skeleton">
      <div className="pdf-skeleton-block" />
      <div className="pdf-skeleton-block" />
    </div>
  );
}
