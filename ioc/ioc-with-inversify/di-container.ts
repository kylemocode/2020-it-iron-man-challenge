import { Container } from 'inversify';
import { DependencyA, DependencyB } from './dependencies';

let IOCContainer = new Container();

// instructs the container to return an instance of class whenever a particular class is requested (injected).
IOCContainer.bind<DependencyA>(DependencyA).toSelf();
IOCContainer.bind<DependencyB>(DependencyB).toSelf();

export default IOCContainer;