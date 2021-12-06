import News from './news/news';
import Sources from './sources/sources';
import { IresponseDataNews, IresponseDataSources } from '../options';

export class AppView {
  sources: Sources;

  news: News;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IresponseDataNews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IresponseDataSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
