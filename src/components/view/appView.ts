import News from './news/news';
import Sources from './sources/sources';
import Filter from './filter/filter';
import { IresponseDataNews, IresponseDataSources } from '../options';

export class AppView {
  sources: Sources;

  news: News;

  filter: Filter;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
    this.filter = new Filter();
  }

  drawNews(data: IresponseDataNews) {
    const values = data?.articles ? data?.articles : [];
    this.news.draw(values);
  }

  drawSources(data: IresponseDataSources) {
    const values = data?.sources ? data?.sources : [];
    this.sources.draw(values);
  }

  drawFilter(data: IresponseDataSources) {
    const values = data?.sources ? data?.sources : [];
    this.filter.draw(values);
  }
}

export default AppView;
