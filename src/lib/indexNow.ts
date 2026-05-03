type IndexNowResponse = {
  ok: boolean;
  status: number;
  statusText: string;
};

const INDEXNOW_ENDPOINT = "https://yandex.com/indexnow";

/**
 * Pings Yandex IndexNow for a single URL.
 * This is intentionally isolated and not auto-triggered per page view.
 */
export async function pingYandexIndexNow(url: string): Promise<IndexNowResponse> {
  const host = process.env.NEXT_PUBLIC_SITE_HOST ?? "mahadmanpowers.ru";
  const key = process.env.YANDEX_INDEXNOW_KEY;
  const keyLocation = process.env.YANDEX_INDEXNOW_KEY_LOCATION;

  if (!key) {
    throw new Error("YANDEX_INDEXNOW_KEY is not configured");
  }

  const parsedUrl = new URL(url);
  if (parsedUrl.hostname !== host) {
    throw new Error(`URL host mismatch: expected ${host}, got ${parsedUrl.hostname}`);
  }

  const payload: {
    host: string;
    key: string;
    urlList: string[];
    keyLocation?: string;
  } = {
    host,
    key,
    urlList: [url],
  };

  if (keyLocation) {
    payload.keyLocation = keyLocation;
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return {
    ok: response.ok,
    status: response.status,
    statusText: response.statusText,
  };
}
