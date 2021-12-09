import AppController from '../controller/controller';
import { IresponseDataNews, IresponseDataSources } from '../options';
import { AppView } from '../view/appView';

class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    (<HTMLElement>document.querySelector('.sources')).addEventListener('click', (e: Event) =>
      this.controller.getNews(e, (data: IresponseDataNews) => this.view.drawNews(data)),
    );
    this.controller.getSources((data: IresponseDataSources) => this.view.drawSources(data));
    this.controller.getSources((data: IresponseDataSources) => this.view.drawFilter(data));
  }

  filterSources() {
    const filterContainer = document.querySelector('.filter') as HTMLElement;
    const allSources = document.querySelector('.sources') as HTMLElement;
    filterContainer.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = e.target as HTMLElement;
      [...allSources.children].forEach((item) => {
        if (`${target.classList[0]}-source` == item.classList[1]) {
          console.log(item.classList[1]);
          item.classList.add('displayblock');
        } else {
          if (item.classList.contains('displayblock')) {
            item.classList.remove('displayblock');
          }
        }
      });
    });
  }
}

export default App;
