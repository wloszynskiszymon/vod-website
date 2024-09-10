export type FixMeLater = any;

export type SliderShow = {
  id: string;
  title: string;
  mediaType: "movie" | "tv";
  releaseData: string;
  image: string;
};

export type SliderData = {
  title: string;
  data: SliderShow[];
};
