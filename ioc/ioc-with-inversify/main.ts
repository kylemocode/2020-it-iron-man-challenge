import 'reflect-metadata';
import { KyleService } from './service';
import IOCContainer from './di-container';

const service: KyleService = IOCContainer.resolve<KyleService>(KyleService);

console.log(service.getAllNames());