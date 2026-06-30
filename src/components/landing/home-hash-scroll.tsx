"use client";

import { useEffect } from "react";

const sectionHashes = new Set(["#technology", "#applications"]);
const pendingHashStorageKey = "linearAmptechPendingHash";

function getRequestedHash() {
  const pendingHash = sessionStorage.getItem(pendingHashStorageKey);

  if (pendingHash && sectionHashes.has(pendingHash)) {
    return pendingHash;
  }

  return window.location.hash;
}

function scrollToSectionHash(attempts = 24) {
  const hash = getRequestedHash();

  if (!sectionHashes.has(hash)) return;

  const target = document.querySelector<HTMLElement>(hash);

  if (!target) {
    if (attempts > 0) {
      window.setTimeout(() => scrollToSectionHash(attempts - 1), 50);
    }

    return;
  }

  sessionStorage.removeItem(pendingHashStorageKey);
  window.history.replaceState(null, "", hash);
  window.scrollTo({
    top: target.offsetTop,
    left: 0,
    behavior: attempts < 24 ? "auto" : "smooth",
  });
}

export function HomeHashScroll() {
  useEffect(() => {
    const scroll = () => scrollToSectionHash();

    scroll();
    window.setTimeout(scroll, 120);
    window.setTimeout(scroll, 360);

    window.addEventListener("hashchange", scroll);

    return () => window.removeEventListener("hashchange", scroll);
  }, []);

  return null;
}
