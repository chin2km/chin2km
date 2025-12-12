import { useState, useEffect, lazy, Suspense } from "react";
import type { Route } from "./+types/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chintu Mohandas | Resume" },
    { name: "description", content: "View and download Chintu Mohandas's resume." },
  ];
}

const PDFViewer = lazy(() => import("../components/PDFViewer"));

function PDFSkeleton() {
  return (
    <div className="pdf-skeleton">
      <div className="pdf-skeleton-block" />
      <div className="pdf-skeleton-block" />
    </div>
  );
}

export default function Resume() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="resume-page page-enter">
      <h2 className="resume-heading">Resume</h2>
      
      <div className="resume-container resume-pdf-container">
        {isMounted ? (
          <Suspense fallback={<PDFSkeleton />}>
            <PDFViewer />
          </Suspense>
        ) : (
          <PDFSkeleton />
        )}
      </div>

      <a
        href="/chintu-mohandas-2026.pdf"
        download
        className="resume-download"
      >
        <DownloadIcon />
        Download PDF
      </a>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

