import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'afce2969118549c699872d9818c62a06', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
