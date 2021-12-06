export interface Options {
  apiKey?: string;
  category?: string;
  language?: string;
  country?: string;
  sources?: string;
}

export type TUrlOptions = {
  [prop: string]: string;
};

export type GetResp = {
  endpoint: string;
  options?: Options;
};

export interface IDataSources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

type ISource = {
  id: string;
  name: string;
};

export interface IDataNews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IresponseDataNews {
  articles?: IDataNews[];
  status: String;
  totalResults?: Number;
}

export interface IresponseDataSources {
  sources?: IDataSources[];
  status: String;
}