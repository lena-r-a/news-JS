import './sources.css';
import { IDataSources } from '../../options';

class Sources {
  draw(data: IDataSources[]) {
    const fragment = document.createDocumentFragment() as DocumentFragment;
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (<HTMLElement>document.querySelector('.sources')).append(fragment);
  }
}

export default Sources;
