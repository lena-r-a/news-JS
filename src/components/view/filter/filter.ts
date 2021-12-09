import './filter.css';
import { IDataSources } from '../../options';

class Filter {
  draw(data: IDataSources[]) {
    const filterArr: string[] = [];
    data.forEach((item) => {
      if (filterArr.indexOf(item.category) == -1) {
        filterArr.push(item.category);
      }
    });
    // console.log('filterArr', filterArr);
    const filterContainer = document.querySelector('.filter') as HTMLElement;
    filterArr.forEach((item) => {
      const filterElement = document.createElement('div');
      filterElement.classList.add(`${item}`);
      filterElement.classList.add('filter-item');
      filterElement.textContent = item.toLocaleUpperCase();
      filterContainer.append(filterElement);
    });
  }
}

export default Filter;
