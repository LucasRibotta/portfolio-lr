export const storeLabels = {
  appStore: "App Store",
  googlePlay: "Google Play",
} as const;

export type StoreId = keyof typeof storeLabels;

export type StoreLinks = Partial<Record<StoreId, string>>;
